import { Express } from "express";
import swaggerUi, { JsonObject } from "swagger-ui-express";

export class Swagger {
	private static title: string = "Microservices Example";
	private static description: string = "Microservices Example documentation";
	private static version: string = "1.0.0";

	public static init(app: Express, swaggerDocument: JsonObject): void {
		swaggerDocument.info.title = this.title;
		swaggerDocument.info.description = this.description;
		swaggerDocument.info.version = this.version;
		app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	}
}
