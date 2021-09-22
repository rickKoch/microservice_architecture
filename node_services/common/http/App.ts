import express from "express";
import { ServerConfig } from "@common/infrastructure/config/ServerConfig";

export class App {
	public app: express.Express;
	private readonly port: string = ServerConfig.PORT;

	private constructor() {
		this.app = express();
	}

	public async run(): Promise<void> {
		try {
			this.app.listen(this.port, () => {
				console.log("APP IS RUNNING");
			});
		} catch (err) {
			console.log(err);
		}
	}

	public static async new(): Promise<App> {
		return new App();
	}
}
