export class CommandsGenerator {
    
    commands: Object[];
    
    constructor() {
        this.commands = [{
            ionic_serve: "ionic serve",
            ionic_run_android: "ionic run android",
            ionic_emulate_android: "ionic emulate android",
            ionic_run_ios: "ionic run ios",
            ionic_emulate_ios: "ionic emulate ios"
        }]
        
    }
    
}