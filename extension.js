"use strict";

// 🕮 <cyberbiont> 04d058ab-e96b-4f18-8ecb-acaa8f7cfe44.md

const vscode = require("vscode");
let statusBarArray = [];
let commandHandleArrray = [];

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
  commandHandleArrray.push(disposable);
  context.subscriptions.push(disposable);

  const bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
  bar.text = "$(book) Typora";
  bar.tooltip = "Open current markdown file in Typora";
  bar.command = "typora.open";
  if (vscode.window.activeTextEditor.document.languageId == "markdown") {
    bar.show();
  } else {
    bar.hide();
  }
  statusBarArray.push(bar);
  context.subscriptions.push(bar);

  context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((e) => {
    if (e.document.languageId == "markdown") {
      bar.show();
    } else {
      bar.hide();
    }
  }))
}

function clear() {
  statusBarArray.forEach(i => {
    i.dispose();
  });
  commandHandleArrray.forEach(i => {
    i.dispose();
  });
}


function deactivate() {
  clear();
}

exports.activate = activate;
exports.deactivate = deactivate;
