const { AutoLanguageClient } = require("atom-languageclient");
const { install } = require("atom-package-deps");
const cp = require("child_process");

class RacketLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.rkt", "source.racket"];
  }
  getLanguageName() {
    return "Racket";
  }
  getServerName() {
    return "Racket Language Server";
  }
  startServerProcess() {
    const options = {};
    options.env = Object.create(process.env);
    options.env.ELECTRON_RUN_AS_NODE = "1";
    const args = ["--lib", "racket-langserver"];
    const child = cp.spawn("racket", args, options);
    this.captureServerErrors(child);
    return child;
  }
  activate() {
    super.activate();
    install("atom-ide-racket");
  }
}

module.exports = new RacketLanguageClient();
