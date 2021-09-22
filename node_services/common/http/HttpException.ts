import { CoreApiResponse } from "@common/api/CoreApiResponse";
import { Code } from "@common/code/Code";
import { Exception } from "@common/exception/Exception";
import { Request, Response, NextFunction } from "express";

export class HttpException {
	private constructor() {}

	private _handleCoreException(error: Error, errorResponse: CoreApiResponse<unknown>): CoreApiResponse<unknown> {
		if (error instanceof Exception) {
			errorResponse = CoreApiResponse.error(error.code, error.message, error.data);
		}

		return errorResponse;
	}

	public static catch(error: Error, _: Request, response: Response, next: NextFunction): void {
		let errorResponse: CoreApiResponse<unknown> = CoreApiResponse.error(Code.INTERNAL_ERROR.code, error.message);

		const exceptionHandler: HttpException = new HttpException();

		errorResponse = exceptionHandler._handleCoreException(error, errorResponse);

		response.json(errorResponse);
	}
}
