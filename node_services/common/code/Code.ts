export type CodeDescription = {
	code: number;
	message: string;
};

export class Code {
	public static SUCCESS: CodeDescription = {
		code: 200,
		message: "Success.",
	};

	public static BAD_REQUEST_ERROR: CodeDescription = {
		code: 400,
		message: "Bad request.",
	};

	public static UNAUTHORIZED_ERROR: CodeDescription = {
		code: 401,
		message: "Unauthorized error.",
	};

	public static WRONG_CREDENTIALS_ERROR: CodeDescription = {
		code: 402,
		message: "Wrong Credentials.",
	};

	public static ACCESS_DENIED_ERROR: CodeDescription = {
		code: 403,
		message: "Access denied.",
	};

	public static INTERNAL_ERROR: CodeDescription = {
		code: 500,
		message: "Internal error.",
	};
}
