{
  perSystem = { pkgs, self', libHaskell, ... }:
    let
      example = libHaskell.mkPackage {
        name = "example";
        src = ./.;
      };
    in
    {
      devShells.example = example.devShell;
      packages = {
        example = example.packages."example:exe:example";
      };
    };
}
