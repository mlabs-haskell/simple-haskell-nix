# Documentation

## Setup

Add `simple-haskell-nix` to your flake inputs

```nix
{
  inputs = {
    simple-haskell-nix.url = "github:mlabs-haskell/simple-haskell-nix";
    # ...
  };
  # ...
}
```

### With flake.parts

1. Import module

```nix
{
  # ...
  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } ({ self, ... }: {
      imports = [
        inputs.simpleHaskellNix.flakeModules.simpleHaskellNix
      ];
      # ...
    };
}
```

2. Call `mkPackage`

```nix
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
```

### Plain flakes

Call `mkPackage`

```nix
{
  # ...
  outputs = {
    packages.x86_64-linux.example =
      let
        example = inputs.simpleHaskellNix.legacyPackages.x86_64-linux.mkPackage {
          name = "example";
          src = ./.;
        };
      in example.packages."example:exe:example";
  };
}
```

See all arguments below.
[Full example](https://github.com/mlabs-haskell/simple-haskell-nix/blob/master/example/README.md)

## `mkPackage` arguments

<!-- INSERTED BY NIX -->
