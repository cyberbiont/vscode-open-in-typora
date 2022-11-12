# open-in-typora

Opens Markdown files in Typora.

## Features

The provided command `typora.open` opens files that use Markdown language mode (.md, .mdown,.markdown) in Typora editor.

Because of some obscure problem, opening files in Typora via Node's `childProcess` doesn't work (and consequently any extensions that use npm 'open' package as well). No other extension that I tried worked for me, so I wrote this. This extension uses VSCode terminal to run Typora.

Extension also contributes context menu commands (in editor and explorer as well) and status bar button.

## Requirements

You must have Typora installed and typora.exe in the system's PATH.
To add Typora to your PATH, you can check [this guide](./addToPATH.md).

## Known Issues

Presumably it will work on all platforms, but at the moment I have tested it on Windows only.

Typora has multiple tabs, but currently there's no option in Typora to use single window only when opening files. So each time you launch `typora.open` command it will open a new Typora window.
You can track this issue on [GitHub](https://github.com/typora/typora-issues/issues/1000).

## Bonus Tip

You can combine this extension with [Power-Tools extension](https://marketplace.visualstudio.com/items?itemName=egomobile.vscode-powertools) to create a handy button on your taskbar, which will be highlighted if the file you are editing can be opened in Typora.

Here is the settings block you need to put in your settings.json (change it to taste):

```json
"ego.power-tools.user": {
	"buttons": [ {
		"text": "Typora",
		"tooltip": "Open file in Typora editor",
		"action": {
			"type": "command",
			"command": "typora.open"
		},
		"onEditorCreated": "if ($vs.window.activeTextEditor.document.languageId === 'markdown') { $v['button'].enable(); $v['button'].color = ''; } else { $v['button'].disable(); $v['button'].color = 'grey';}",
		"onEditorChanged": "if ($vs.window.activeTextEditor.document.languageId === 'markdown') { $v['button'].enable(); $v['button'].color = ''; } else { $v['button'].disable(); $v['button'].color = 'grey';}"
	}]
}
```

## Credits

[alexzshl](https://github.com/alexzshl) - for context menu commands and status bar and configuration options.
[fbarda](https://github.com/fbarda) - for the guide on adding Typora executable to PATH
