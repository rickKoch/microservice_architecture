import { User } from "../domain/user/entity/User";
import { Document, Model, model, Schema } from "mongoose";

export interface IUserModel extends Document {
	_id: string;
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	createdAt: Date;
	updateAt: Date;
	removedAt: Date;
}

const userSchema: Schema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Number,
		required: true,
	},
	editedAt: {
		type: Number,
	},
	removedAt: {
		type: Number,
	},
});

const UserModel: Model<IUserModel> = model("user", userSchema);

export class UserMongoRepository {
	private constructor() {}

	public async createUser(payload: User): Promise<User> {
		const user: IUserModel = new UserModel({
			id: payload.getId(),
			firstName: payload.getFirstName(),
			lastName: payload.getLastName(),
			email: payload.getEmail(),
			password: payload.getPassword(),
			createdAt: payload.getCreatedAt(),
		});
		return user.save().then((res: IUserModel) =>
			User.new({
				id: res.id,
				firstName: res.firstName,
				lastName: res.lastName,
				email: res.email,
				password: res.password,
				createdAt: new Date(res.createdAt),
			})
		);
	}

	public static new(): UserMongoRepository {
		return new UserMongoRepository();
	}
}
