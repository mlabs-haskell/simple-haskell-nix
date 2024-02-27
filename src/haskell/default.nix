{ haskell-nix
}:

{ lib
, flake-parts-lib
, ...
}:
let
  inherit (flake-parts-lib) mkPerSystemOption;
  inherit (lib) types mkOption;
in
{
  options = {
    perSystem = mkPerSystemOption ({ config, system, pkgs, ... }: {
      config =
        let
          mkHaskellPackage = pkgs.callPackage ./lib.nix {
            inherit lib system;
            haskellNixNixpkgs = haskell-nix.inputs.nixpkgs;
            haskellNixOverlay = haskell-nix.overlay;
          };

        in
          {
            _module.args.libHaskell = {
              mkPackage = mkHaskellPackage;
            };
        };
    });
  };
}
