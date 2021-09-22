import Repository from "../../domain/user/repository/Repository";
import { Code } from "@common/code/Code";
import { Exception } from "@common/exception/Exception";
import { UserUseCaseDto } from "../../domain/user/usecase/dto/UserUseCaseDto";
import { CreateUserPort } from "../../domain/user/port/usecase/CreateUserPort";
import { User } from "../../domain/user/entity/User";

export interface ICreateUser {
	repo: Repository;
	handle(data: CreateUserPort): Promise<UserUseCaseDto>;
}

export class CreateUser implements ICreateUser {
	private constructor(public repo: Repository) {}

	public async handle(payload: CreateUserPort): Promise<UserUseCaseDto> {
		const u: User = await User.new(payload);
		return this.repo.createUser(u).then((user) => {
			return UserUseCaseDto.newFromUser(user);
		});
	}

	public static new(repo: Repository): ICreateUser {
		if (!repo) {
			throw Exception.new({
				code: Code.INTERNAL_ERROR,
				overrideMessage: "no repo",
			});
		}

		return new CreateUser(repo);
	}
}
