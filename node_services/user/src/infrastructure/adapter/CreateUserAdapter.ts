import { Exclude, Expose, plainToClass } from "class-transformer";
import { IsEmail, IsString } from "class-validator";
import { CreateUserPort } from "../../domain/user/port/usecase/CreateUserPort";
import { UseCaseValidatableAdapter } from "@common/adapter/usecase/UseCaseValidatableAdapter";

@Exclude()
export class CreateUserAdapter extends UseCaseValidatableAdapter implements CreateUserPort {
	@Expose()
	@IsString()
	public firstName: string;

	@Expose()
	@IsString()
	public lastName: string;

	@Expose()
	@IsEmail()
	public email: string;

	@Expose()
	@IsString()
	public password: string;

	public static async new(payload: CreateUserPort): Promise<CreateUserAdapter> {
		const adapter: CreateUserAdapter = plainToClass(CreateUserAdapter, payload);
		await adapter.validate();

		return adapter;
	}
}
