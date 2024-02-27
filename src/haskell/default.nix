{ haskell-nix
}:

{ lib
, flake-parts-lib
, ...
}:
let
  inherit (flake-parts-lib) mkPerSystemOption;
in
{
  options = {
    perSystem = mkPerSystemOption ({ config, system, pkgs, ... }: {
      config =
        let
          simpleHaskellNix = pkgs.callPackage ./lib.nix {
            inherit lib system;
            haskellNixNixpkgs = haskell-nix.inputs.nixpkgs;
            haskellNixOverlay = haskell-nix.overlay;
          };

          export = {
            inherit (simpleHaskellNix) mkPackage;
          };
        in
        {
          _module.args.simpleHaskellNix = export;
          legacyPackages = export;

          packages = {
            simpleHaskellNixDocsMd = simpleHaskellNix.docs;
          };
        };
    });
  };
}
