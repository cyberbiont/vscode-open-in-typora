"use strict";

// 🕮 <cyberbiont> 04d058ab-e96b-4f18-8ecb-acaa8f7cfe44.md

const vscode = require("vscode");


const typoraPath = (() => {
  const { platform, env } = require("process");
  if (platform !== "win32") {
    return "typora";
  }
  const fileExists = require("fs").existsSync,
    defaultTyporaPath = env.ProgramFiles + "\\Typora\\Typora.exe",
    alternativeTyporaPath = env["ProgramFiles(x86)"] + "\\Typora\\Typora.exe";

  const configValue = vscode.workspace.getConfiguration("open-in-typora").get("typoraPath");
  if (configValue) { return configValue; }
  if (fileExists(defaultTyporaPath)) {
    return defaultTyporaPath;
  } else if (fileExists(alternativeTyporaPath)) {
    return alternativeTyporaPath;
  }
  return "typora";
})();

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const terminal = vscode.window.createTerminal({
    name: "Typora",
    hideFromUser: true
  });

  function openInTypora() {
    if (
      !vscode.window.activeTextEditor ||
      !vscode.window.activeTextEditor.document.fileName
    ) {
      vscode.window.showInformationMessage("No active editor or URI available");
      return;
    }

    if (vscode.window.activeTextEditor.document.languageId !== "markdown") {
      vscode.window.showInformationMessage(
        `The file you are trying to open is not in Markdown format!`
      );
      return;
    } else {
      try {
        terminal.sendText(
          `"${typoraPath}" "${vscode.window.activeTextEditor.document.fileName}"`
        );
        vscode.window.showInformationMessage("Opening Typora");
      } catch (e) {
        vscode.window.showInformationMessage(
          `Failed to open file: ${vscode.window.activeTextEditor.document.fileName} in Typora!`
        );
      }
    }
  }
  let disposable = vscode.commands.registerCommand("typora.open", openInTypora);

  context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() { }

module.exports = {
  activate,
  deactivate
};
