{
  description = "simple-haskell-nix";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    pre-commit-hooks-nix = {
      url = "github:cachix/pre-commit-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.nixpkgs-stable.follows = "nixpkgs";
    };
    hci-effects = {
      url = "github:hercules-ci/hercules-ci-effects";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-parts.follows = "flake-parts";
    };
    haskell-nix = {
      url = "github:input-output-hk/haskell.nix";
      inputs = {
        hydra.follows = "empty-flake";
      };
    };
    empty-flake = {
      url = "github:mlabs-haskell/empty-flake";
    };
  };
  outputs = inputs:
    let
      flakeModules = {
        haskell = import ./src/haskell { inherit (inputs) haskell-nix; };
      };
    in
    inputs.flake-parts.lib.mkFlake { inherit inputs; } ({ self, ... }: {
      imports = [
        inputs.pre-commit-hooks-nix.flakeModule
        inputs.hci-effects.flakeModule
        ./example
      ] ++ (builtins.attrValues flakeModules);

      # `nix flake show --impure` hack
      systems =
        if builtins.hasAttr "currentSystem" builtins
        then [ builtins.currentSystem ]
        else inputs.nixpkgs.lib.systems.flakeExposed;

      herculesCI.ciSystems = [ "x86_64-linux" ];

      hercules-ci.flake-update = {
        enable = true;
        updateBranch = "hci/update-flake-lock";
        createPullRequest = true;
        autoMergeMethod = null;
        when = {
          minute = 45;
          hour = 12;
          dayOfWeek = "Sun";
        };
      };

      flake.flakeModules = flakeModules;

      perSystem =
        { config
        , pkgs
        , system
        , ...
        }: {
          _module.args.pkgs = import self.inputs.nixpkgs {
            inherit system;
            config.allowBroken = true;
          };

          pre-commit.settings = {
            hooks = {
              deadnix.enable = true;
              nixpkgs-fmt.enable = true;
              typos.enable = true;
            };

            settings = {
              deadnix.edit = true;
            };
          };

          devShells = {
            default = pkgs.mkShell {
              shellHook = config.pre-commit.installationScript;
            };
          };
        };
    });
}
