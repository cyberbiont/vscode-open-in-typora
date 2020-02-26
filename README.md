# open-in-typora

## Features

The provided command `typora.open` opens files that use Markdown language mode in Typora editor.

Because if some obscure problem, opening files in Typora via Node's childProcess doesn't work (and consequently any extensions that use npm 'open' package as well). Hence this extension uses VSCode terminal to run Typora.

## Requirements

You must have Typora installed and typora.exe in the system's PATH.

## Known Issues

Presumably it will work on all platforms, but at the moment I have tested it on Windows only.

Typora has multiple tabs, but currently there's no option in Typora to use single window only when opening files. So each time you launch `typora.open` command it will open a new Typora window.
You can track this issue on [GitHub](https://github.com/typora/typora-issues/issues/1000).

## Bonus Tip

You can combine this extension with [Power-Tools extension](https://marketplace.visualstudio.com/items?itemName=ego-digital.vscode-powertools) to create a handy button on your taskbar, which will be highlighted if the file you are editing can be opened in Typora.

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
