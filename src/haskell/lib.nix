{ lib
, fetchFromGitHub
  # e.g. "x86_64-linux"
, system # : string
, haskellNixNixpkgs # : nixpkgs
, haskellNixOverlay # : overlay
}:

let
  iohk-nix = fetchFromGitHub {
    owner = "input-output-hk";
    repo = "iohk-nix";
    rev = "4848df60660e21fbb3fe157d996a8bac0a9cf2d6";
    hash = "sha256-ediFkDOBP7yVquw1XtHiYfuXKoEnvKGjTIAk9mC6qxo=";
  };

  pkgs = import haskellNixNixpkgs {
    inherit system;
    overlays = [
      (import "${iohk-nix}/overlays/crypto")
      haskellNixOverlay
      (_final: prev: {
        haskell-nix = prev.haskell-nix // {
          extraPkgconfigMappings = prev.haskell-nix.extraPkgconfigMappings // {
            "libblst" = [ "blst" ];
          };
        };

      })
    ];
  };

  simpleHaskellNixModule = { ... }: {
    options = {
      name = lib.mkOption {
        type = lib.types.str;
        description = "Name of package";
      };

      src = lib.mkOption {
        type = lib.types.path;
        description = "Path to package root, i.e. a directory with .cabal file";
      };

      ghcVersion = lib.mkOption {
        type = lib.types.str;
        default = "ghc966";
        description = "Haskell compiler to use";
      };

      haskellModules = lib.mkOption {
        type = lib.types.listOf lib.types.anything;
        default = [ ];
        description = "";
      };

      externalDependencies = lib.mkOption {
        type = lib.types.listOf (lib.types.oneOf [ lib.types.path lib.types.package ]);
        default = [ ];
        description = "";
      };

      externalRepositories = lib.mkOption {
        type = lib.types.lazyAttrsOf lib.types.anything;
        default = { };
        description = "";
      };
    };
  };

  # m :: Module
  markdownDocsFor = m:
    let
      docsMd = pkgs.nixosOptionsDoc {
        options = builtins.removeAttrs (lib.evalModules { modules = [ m ]; }).options [ "_module" ];
      };
    in
    pkgs.runCommand "docs.md" { } ''
      cat ${docsMd.optionsCommonMark} >> $out
    '';

  mkPackage = { config, ... }:
    let
      mkHackage = pkgs.callPackage ./mk-hackage.nix {
        nix-tools = pkgs.haskell-nix.nix-tools-set {
          compiler-nix-name = config.ghcVersion;
        };
      };

      # This looks like a noop but without it haskell.nix throws a runtime
      # error about `pkgs` attribute not being present which is nonsense
      # https://input-output-hk.github.io/haskell.nix/reference/library.html?highlight=cabalProject#modules
      fixedHaskellModules = map (m: args @ { ... }: m args) config.haskellModules;

      flatExternalDependencies =
        lib.lists.concatMap
          (dep: [ (dep.passthru or { }).src or dep ] ++
            (flatExternalDependencies (dep.passthru or { }).externalDependencies or [ ]));

      flattenedExternalDependencies = flatExternalDependencies config.externalDependencies;

      customHackages = mkHackage {
        srcs = map toString flattenedExternalDependencies;
        inherit (config) name;
      };

      project = pkgs.haskell-nix.cabalProject' {
        inherit (config) src name;

        compiler-nix-name = config.ghcVersion;
        inputMap = lib.mapAttrs (_: toString) config.externalRepositories;

        modules = customHackages.modules ++ fixedHaskellModules;
        inherit (customHackages) extra-hackages extra-hackage-tarballs;

        shell = {
          withHoogle = true;
          exactDeps = true;

          tools = {
            cabal = { };
            haskell-language-server = { };
          };
        };
      };

      projectFlake = project.flake { };

      augmentedPackages = builtins.mapAttrs
        (_: package:
          package // {
            passthru = (package.passthru or { }) // {
              inherit (config) src externalDependencies;
            };
          })
        (projectFlake.packages or { });
    in
    projectFlake // {
      packages = augmentedPackages;
    };

in
{
  mkPackage = config: mkPackage (lib.modules.evalModules { modules = [ simpleHaskellNixModule { inherit config; } ]; });
  docs = markdownDocsFor simpleHaskellNixModule;
}

