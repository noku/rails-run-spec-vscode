'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as terminal from './terminal';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "rails-run-spec-vscode" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(vscode.commands.registerCommand('extension.runFileSpecs', () => terminal.runSpecFile({})));
    context.subscriptions.push(vscode.commands.registerCommand('extension.runSpecsFromMenu', (fileUri?: vscode.Uri) => {
        terminal.runSpecFile({path: fileUri.fsPath});
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.runSpecLine', () => {
        let currentPosition:vscode.Position = vscode.window.activeTextEditor.selection.active;
        terminal.runSpecFile({lineNumber: currentPosition.line + 1});
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.runLastSpec', terminal.runLastSpec));
}

// this method is called when your extension is deactivated
export function deactivate() {
}
