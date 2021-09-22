export type CreateUserEntityPayload = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	id?: string;
	createdAt?: Date;
	editedAt?: Date;
	removedAt?: Date;
};
