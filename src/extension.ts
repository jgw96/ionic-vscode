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


    let ionic_serve = vscode.commands.registerCommand("extension.ionicServe", () => {
        commandGen.runCommand("Currently running: ionic serve", commands.ionic_serve);
    });

    let ionic_run_android = vscode.commands.registerCommand("extension.ionicRunAndroid", () => {
        commandGen.runCommand("CurrentlyRunning: ionic run android", commands.ionic_run_android);
    });

    let ionic_emulate_android = vscode.commands.registerCommand("extension.ionicEmulateAndroid", () => {
        commandGen.runCommand("CurrentlyRunning: ionic emulate android", commands.ionic_emulate_android);
    });

    let ionic_run_ios = vscode.commands.registerCommand("extension.ionicRunIos", () => {
        commandGen.runCommand("CurrentlyRunning: ionic run ios", commands.ionic_run_ios);
    });

    let ionic_emulate_ios = vscode.commands.registerCommand("extension.ionicEmulateIos", () => {
        commandGen.runCommand("CurrentlyRunning: ionic emulate ios", commands.ionic_emulate_ios);
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