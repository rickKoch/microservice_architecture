import { CoreApiResponse } from "@common/api/CoreApiResponse";
import { Express, Request, Response, NextFunction } from "express";
import { Application } from "../app";
import { UserUseCaseDto } from "../domain/user/usecase/dto/UserUseCaseDto";
import { CreateUserAdapter } from "../infrastructure/adapter/CreateUserAdapter";

export class Http {
	private constructor(private service: Application) {}

	public createAccount = async ({ body }: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const adapter: CreateUserAdapter = await CreateUserAdapter.new({
				firstName: body.firstName,
				lastName: body.lastName,
				email: body.email,
				password: body.password,
			});

			const createdUser: UserUseCaseDto = await this.service.Commands.CreateUser.handle(adapter);
			const apiResponse: CoreApiResponse<UserUseCaseDto> = CoreApiResponse.success(createdUser);

			res.status(apiResponse.code).json(apiResponse);
		} catch (err) {
			next(err);
		}
	};

	public static new(service: Application): Http {
		return new Http(service);
	}

	public static init(app: Express, service: Application): void {
		const http: Http = Http.new(service);
		app.route("/").post(http.createAccount);
	}
}
