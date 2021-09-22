import mongoose from "mongoose";
import { DatabaseConfig } from "../infrastructure/config/DatabaseConfig";
mongoose.Promise = global.Promise;

export function connect(): any {
	const connectionString: string = `mongodb://${DatabaseConfig.DB_USERNAME}:${DatabaseConfig.DB_PASSWORD}@${DatabaseConfig.DB_HOST}:${DatabaseConfig.DB_PORT}/`;
	console.log(connectionString);
	return mongoose.connect(connectionString);
}
