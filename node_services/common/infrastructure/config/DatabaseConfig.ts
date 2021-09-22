export class DatabaseConfig {
	public static readonly DB_HOST: string = process.env.MONGO_HOST!;

	public static readonly DB_PORT: number = +process.env.MONGO_PORT!;

	public static readonly DB_NAME: string = process.env.MONGO_INITDB_DATABASE!;

	public static readonly DB_USERNAME: string = process.env.MONGO_INITDB_ROOT_USERNAME!;

	public static readonly DB_PASSWORD: string = process.env.MONGO_INITDB_ROOT_PASSWORD!;
}
