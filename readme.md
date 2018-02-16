# atom-ide-racket

Racket language support for Atom-IDE, powered by
[racket-langserver](https://github.com/jeapostrophe/racket-langserver).


## Installation & Dependencies

The following console commands should be sufficient for most configurations:

```
raco pkg install racket-langserver
apm install language-racket
apm install atom-ide-ui
apm install atom-ide-racket
```

- `language-racket` provides an Atom grammar for Racket. The language server
will not start unless it is installed.
- `atom-ide-ui` is used by Atom to translate LSP messages into visible UI
elements within the Atom interface. The language server will seem to fail
silently unless this is installed.

### Quick Install

Bash users can simply paste the following line into the terminal to install all
four packages:

`raco pkg install racket-langserver && apm install atom-ide-racket && apm install language-racket && apm install atom-ide-ui`

## Troubleshooting

Having issues? Open the Atom developer tools (`Ctrl+Shift+I` by default) and
enter `atom.config.set("core.debugLSP", true);` into the console. After
reloading Atom, you should be able to see all the debug info related to LSP, as
well as the stderr of the language server.
