import { Express } from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { HttpException } from "@common/http/HttpException";

export class Middlewares {
	public static init(app: Express): void {
		app.disable("x-powered-by");
		app.use(cors());
		app.use(morgan("dev"));
		app.use(json());
		app.use(urlencoded({ extended: true }));
	}

	public static errorHandler(app: Express): void {
		app.use(HttpException.catch);
	}
}
