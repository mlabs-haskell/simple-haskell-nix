{
  hercules-ci.github-pages.branch = "master";
  perSystem = { self', pkgs, config, ... }: {
    hercules-ci.github-pages.settings.contents = config.packages.docs;

    packages = {
      docs = pkgs.stdenv.mkDerivation {
        name = "docs";
        src = ./.;

        nativeBuildInputs = [
          pkgs.mdbook
        ];

        buildPhase = ''
          runHook preBuild
          cat ${self'.packages.simpleHaskellNixDocsMd} | sed 's/^##/###/' >> documentation.md
          mdbook build . --dest-dir $out
          runHook postBuild
        '';
      };
    };
  };
}
