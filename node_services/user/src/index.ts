import "reflect-metadata";
import "module-alias/register";
import { App } from "@common/http/App";
import { Http } from "./ports/http";
import * as swaggerDoc from "./ports/openapi.json";
import { Middlewares } from "@common/http/Middlewares";
import { Swagger } from "@common/http/Swagger";
import { newService } from "./service";
import { Application } from "./app";
import { connect } from "@common/db";

async function runApp(): Promise<void> {
	await connect();

	const server: App = await App.new();
	const service: Application = newService();

	Middlewares.init(server.app);
	Http.init(server.app, service);
	Middlewares.errorHandler(server.app);
	Swagger.init(server.app, swaggerDoc);

	await server.run();
}

(async () => {
	await runApp();
})();
