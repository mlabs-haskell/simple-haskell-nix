{
  perSystem = { simpleHaskellNix, ... }:
    let
      example = simpleHaskellNix.mkPackage {
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
