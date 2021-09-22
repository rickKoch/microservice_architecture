import { Application } from "../app";
import * as commands from "../app/command";
import { UserMongoRepository } from "../adapters";

export function newService(): Application {
	return {
		Commands: {
			CreateUser: commands.CreateUser.new(UserMongoRepository.new()),
		},
		Queries: {},
	};
}
