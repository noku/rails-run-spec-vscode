'use strict';
import * as vscode from 'vscode';

let activeTerminals = {};
const SPEC_TERMINAL_NAME = 'Running Specs';

export function runSpecFile(){
    let editor: vscode.TextEditor = vscode.window.activeTextEditor,
        fileName: string = vscode.workspace.asRelativePath(editor.document.fileName);

    if (!editor || !isSpec(fileName)) {
        return;
    }

    let specTerminal: vscode.Terminal = activeTerminals[SPEC_TERMINAL_NAME];

    if (!specTerminal) {
        specTerminal = vscode.window.createTerminal(SPEC_TERMINAL_NAME);
        activeTerminals[SPEC_TERMINAL_NAME] = specTerminal;
    }

    vscode.commands.executeCommand('workbench.action.terminal.focus');
    vscode.commands.executeCommand('workbench.action.terminal.clear');

    specTerminal.show();
    specTerminal.sendText(`bundle exec rspec ${fileName}`);
}

function isSpec(fileName: string) {
    return fileName.indexOf('_spec.rb') > -1;
}

