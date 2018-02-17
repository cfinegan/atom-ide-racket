# atom-ide-racket

Racket language support for Atom-IDE, powered by
[racket-langserver](https://github.com/jeapostrophe/racket-langserver).


## Installation & Dependencies

`apm install atom-ide-racket` should be sufficient for most systems. The Atom packages `atom-ide-ui` and `language-racket` are dependencies and should be installed automatically if they are not already.

The Racket package `racket-langserver` is also a dependency and should be
installed automatically via the npm *install* script. If the automatic
installation fails, try installing it manually with
`raco pkg install racket-langserver`.

## Troubleshooting

Having issues? Open the Atom developer tools (`Ctrl+Shift+I` by default) and
enter `atom.config.set("core.debugLSP", true);` into the console. After
reloading Atom, you should be able to see all the debug info related to LSP, as
well as the language server's stderr
