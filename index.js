const { AutoLanguageClient } = require("atom-languageclient");
const cp = require("child_process");

class RacketLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.rkt"];
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
    options.env.ELECTRON_NO_ATTACH_CONSOLE = "1";
    const args = ["-t", "~/racket-langserver/main.rkt"];
    const child = cp.spawn("racket", args, options);
    //this.captureServerErrors(child);
    return child;
  }
  // shouldStartForEditor(editor) {
  //   return true;
  // }
}

module.exports = new RacketLanguageClient();
