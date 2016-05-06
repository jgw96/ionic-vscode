'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {CommandsGenerator} from "../src/commands"

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {

    const commands = new CommandsGenerator().commands[0];
    const commandGen = new CommandsGenerator();

    console.log('Congratulations, ionic-vscode is now active!');

    const ionic_serve = vscode.commands.registerCommand("extension.ionicServe", (): void => {
        commandGen.runCommand("Currently Running: ionic serve", commands.ionic_serve);
    });

    const ionic_run_android = vscode.commands.registerCommand("extension.ionicRunAndroid", (): void => {
        commandGen.runCommand("Currently Running: ionic run android", commands.ionic_run_android);
    });

    const ionic_emulate_android = vscode.commands.registerCommand("extension.ionicEmulateAndroid", (): void => {
        commandGen.runCommand("Currently Running: ionic emulate android", commands.ionic_emulate_android);
    });

    const ionic_run_ios = vscode.commands.registerCommand("extension.ionicRunIos", (): void => {
        commandGen.runCommand("Currently Running: ionic run ios", commands.ionic_run_ios);
    });

    const ionic_emulate_ios = vscode.commands.registerCommand("extension.ionicEmulateIos", (): void => {
        commandGen.runCommand("Currently Running: ionic emulate ios", commands.ionic_emulate_ios);
    });


    context.subscriptions.push(ionic_serve);
    context.subscriptions.push(ionic_run_android);
    context.subscriptions.push(ionic_emulate_android);
    context.subscriptions.push(ionic_run_ios);
    context.subscriptions.push(ionic_emulate_ios);
}

// this method is called when your extension is deactivated
export function deactivate(): void {
    console.log("Ionic extension was deactivated");
}