import * as commands from "./command";

export interface Application {
	Commands: Commands;
	Queries: any;
}

export interface Commands {
	CreateUser: commands.ICreateUser;
}
