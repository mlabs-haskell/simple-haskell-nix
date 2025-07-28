{
  perSystem = { simpleHaskellNix, ... }:
    let
      example = simpleHaskellNix.mkPackage {
        name = "example";
        src = ./.;
      };
    in
    {
      devShells.example = example.devShells.default;
      packages = {
        example = example.packages."example:exe:example";
      };
    };
}
