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
            ionic_emulate_ios: "ionic emulate ios"
        }]
    }

    runCommand(message: string, command: any) {
        vscode.window.showInformationMessage(message);
        exec(command, { cwd: vscode.workspace.rootPath }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showInformationMessage(error.toString());
                console.log(error);
            }
        });
    }

}