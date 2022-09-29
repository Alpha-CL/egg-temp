import { Application, IBoot } from "egg";
import * as path from "path";

export default class FooBoot implements IBoot {
	
	private readonly app: Application;
	
	constructor(app: Application) {
		this.app = app;
	}
	
	configWillLoad() {
		// Ready to call configDidLoad,
		// Config, plugin files are referred,
		// this is the last chance to modify the config.
		
		const directory = path.join(this.app.config.baseDir, "app/validate");
		this.app.loader.loadToApp(directory, "validate");
	}
	
	configDidLoad() {
		// Config, plugin files have loaded.
	}
	
	async didLoad() {
		await this.app.model.sync({ force: true });
		// All files have loaded, start plugin here.
	}
	
	async willReady() {
		// All plugins have started, can do some thing before app ready.
	}
	
	async didReady() {
		// Worker is ready, can do some things
		// don`t need to block the app boot.
	}
	
	async serverDidReady() {
		// Server is listening.
	}
	
	async beforeClose() {
		// Do some thing before app close.
	}
}


