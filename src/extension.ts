'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {CommandsGenerator} from "../src/commands"
import {exec} from "child_process";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {

    const commands = new CommandsGenerator().commands[0];

    console.log('Congratulations, ionic-vscode is now active!');


    let ionic_serve = vscode.commands.registerCommand("extension.ionicServe", () => {
        vscode.window.showInformationMessage("Currently running: ionic serve");
        exec(commands.ionic_serve, { cwd: vscode.workspace.rootPath }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage(error.toString());
                console.log(error);
            }
        });

    });

    let ionic_run_android = vscode.commands.registerCommand("extension.ionicRunAndroid", () => {
        vscode.window.showInformationMessage("Currently running: ionic run android");
        exec(commands.ionic_run_android, { cwd: vscode.workspace.rootPath }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage(error.toString());
            }
        });

    });

    let ionic_emulate_android = vscode.commands.registerCommand("extension.ionicEmulateAndroid", () => {
        vscode.window.showInformationMessage("Currently running: ionic emulate android");
        exec(commands.ionic_emulate_android, { cwd: vscode.workspace.rootPath }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage(error.toString());
            }
        });

    });

    let ionic_run_ios = vscode.commands.registerCommand("extension.ionicRunIos", () => {
        vscode.window.showInformationMessage("Currently running: ionic run ios");
        exec(commands.ionic_run_ios, { cwd: vscode.workspace.rootPath }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage(error.toString());
            }
        });

    });

    let ionic_emulate_ios = vscode.commands.registerCommand("extension.ionicEmulateIos", () => {
        vscode.window.showInformationMessage("Currently running: ionic emulate ios");
        exec(commands.ionic_emulate_ios, { cwd: vscode.workspace.rootPath }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage(error.toString());
            }
        });

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