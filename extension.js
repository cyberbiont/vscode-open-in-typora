"use strict";

// 🕮 04d058ab-e96b-4f18-8ecb-acaa8f7cfe44.md

const vscode = require("vscode");

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
          `typora "${vscode.window.activeTextEditor.document.fileName}"`
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

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
