import {exec} from "child_process";
import * as vscode from 'vscode';

export class CommandsGenerator {

    commands: any[];

    constructor() {
        this.commands = [{
            ionic_serve: "ionic serve",
            ionic_run_android: "ionic run android",
            ionic_emulate_android: "ionic emulate android",
            ionic_run_ios: "ionic run ios",
            ionic_emulate_ios: "ionic emulate ios",
            ionic_generate: `ionic generate`
        }]
    }

    public runCommand(message: string, command: any) {
        if (command === "ionic generate") {
            vscode.window.showQuickPick(
                [
                    "provider",
                    "page",
                    "component",
                    "directive",
                    "pipe",
                    "tabs"
                ],
                {
                    placeHolder: "What would you like to generate?"
                }
            ).then((generate: string) => {
                vscode.window.showInputBox({
                    prompt: `What would you like to name your ${generate}?`,
                    value: `My${generate}`
                }).then((name: string) => {
                    vscode.window.showInformationMessage(message);
                    exec(`ionic generate ${generate} ${name}`, { cwd: vscode.workspace.rootPath }, (error: Error, stdout: string, stderr: string) => {
                        if (error) {
                            vscode.window.showErrorMessage(error.toString());
                            console.log(error);
                        }
                    });
                });
            });
        }
        else {
            vscode.window.showInformationMessage(message);
            exec(command, { cwd: vscode.workspace.rootPath }, (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    vscode.window.showErrorMessage(error.toString());
                    console.log(error);
                }
            });
        };

    }

}