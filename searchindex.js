Object.assign(window.search, {"doc_urls":["introduction.html#introduction","documentation.html#documentation","documentation.html#setup","documentation.html#with-flakeparts","documentation.html#plain-flakes","documentation.html#mkpackage-arguments","documentation.html#externaldependencies","documentation.html#externalrepositories","documentation.html#ghcversion","documentation.html#haskellmodules","documentation.html#name","documentation.html#src"],"index":{"documentStore":{"docInfo":{"0":{"body":29,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":2,"title":1},"10":{"body":4,"breadcrumbs":2,"title":1},"11":{"body":9,"breadcrumbs":2,"title":1},"2":{"body":12,"breadcrumbs":2,"title":1},"3":{"body":25,"breadcrumbs":2,"title":1},"4":{"body":17,"breadcrumbs":3,"title":2},"5":{"body":0,"breadcrumbs":3,"title":2},"6":{"body":5,"breadcrumbs":2,"title":1},"7":{"body":6,"breadcrumbs":2,"title":1},"8":{"body":7,"breadcrumbs":2,"title":1},"9":{"body":4,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"xkcd 927 A simple yet another haskell.nix wrapper that doesn't promise much, doesn't force you to use flake.parts nor anything similar, simply will build a haskell package for you. You are responsible for creating flake attributes where you wish. Repository See usage instructions here .","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"","breadcrumbs":"Documentation » Documentation","id":"1","title":"Documentation"},"10":{"body":"Name of package Type: string","breadcrumbs":"Documentation » name","id":"10","title":"name"},"11":{"body":"Path to package root, i.e. a directory with .cabal file Type: path","breadcrumbs":"Documentation » src","id":"11","title":"src"},"2":{"body":"Add simple-haskell-nix to your flake inputs { inputs = { simpleHaskellNix.url = \"github:mlabs-haskell/simple-haskell-nix\"; # ... }; # ...\n}","breadcrumbs":"Documentation » Setup","id":"2","title":"Setup"},"3":{"body":"Import module { # ... outputs = inputs: inputs.flake-parts.lib.mkFlake { inherit inputs; } ({ self, ... }: { imports = [ inputs.simpleHaskellNix.flakeModules.simpleHaskellNix ]; # ... };\n} Call mkPackage { perSystem = { simpleHaskellNix, ... }: let example = simpleHaskellNix.mkPackage { name = \"example\"; src = ./.; }; in { devShells.example = example.devShell; packages = { example = example.packages.\"example:exe:example\"; }; };\n}","breadcrumbs":"Documentation » With flake.parts","id":"3","title":"With flake.parts"},"4":{"body":"Call mkPackage { # ... outputs = { packages.x86_64-linux.example = let example = inputs.simpleHaskellNix.legacyPackages.x86_64-linux.mkPackage { name = \"example\"; src = ./.; }; in example.packages.\"example:exe:example\"; };\n} See all arguments below. Full example","breadcrumbs":"Documentation » Plain flakes","id":"4","title":"Plain flakes"},"5":{"body":"","breadcrumbs":"Documentation » mkPackage arguments","id":"5","title":"mkPackage arguments"},"6":{"body":"Type: list of (path or package) Default: [ ]","breadcrumbs":"Documentation » externalDependencies","id":"6","title":"externalDependencies"},"7":{"body":"Type: lazy attribute set of anything Default: { }","breadcrumbs":"Documentation » externalRepositories","id":"7","title":"externalRepositories"},"8":{"body":"Haskell compiler to use Type: string Default: \"ghc928\"","breadcrumbs":"Documentation » ghcVersion","id":"8","title":"ghcVersion"},"9":{"body":"Type: list of anything Default: [ ]","breadcrumbs":"Documentation » haskellModules","id":"9","title":"haskellModules"}},"length":12,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"9":{"2":{"7":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"d":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":3,"docs":{"0":{"tf":1.0},"7":{"tf":1.0},"9":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"a":{"b":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":4,"docs":{"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772}},"e":{".":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"\"":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"h":{"c":{"9":{"2":{"8":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"a":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"8":{"tf":1.0}},"l":{".":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{".":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"n":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}},"s":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"c":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"x":{"8":{"6":{"_":{"6":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":5,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"x":{"8":{"6":{"_":{"6":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"11":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":1,"docs":{"7":{"tf":1.0}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"c":{"df":3,"docs":{"11":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"10":{"tf":1.0},"8":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":6,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":2,"docs":{"0":{"tf":1.0},"8":{"tf":1.0}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"k":{"c":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"9":{"2":{"7":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"d":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":3,"docs":{"0":{"tf":1.0},"7":{"tf":1.0},"9":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951}}}}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"a":{"b":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":4,"docs":{"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":11,"docs":{"1":{"tf":1.7320508075688772},"10":{"tf":1.0},"11":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772}},"e":{".":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"\"":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"h":{"c":{"9":{"2":{"8":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"a":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"8":{"tf":1.0}},"l":{".":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{".":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"n":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}},"s":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"c":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"x":{"8":{"6":{"_":{"6":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":3,"docs":{"10":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":5,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"x":{"8":{"6":{"_":{"6":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"11":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":1,"docs":{"7":{"tf":1.0}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"c":{"df":3,"docs":{"11":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"10":{"tf":1.0},"8":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":6,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":2,"docs":{"0":{"tf":1.0},"8":{"tf":1.0}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"k":{"c":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"title":{"root":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"h":{"c":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"m":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"r":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});