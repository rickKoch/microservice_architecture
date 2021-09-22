import { Code } from "@common/code/Code";
import { Exception } from "@common/exception/Exception";
import { Optional } from "@common/type/CommonTypes";
import { ClassValidationDetails, ClassValidator } from "@common/util/class-validator/ClassValidator";

export class UseCaseValidatableAdapter {
	public async validate(): Promise<void> {
		const details: Optional<ClassValidationDetails> = await ClassValidator.validate(this);
		if (details) {
			throw Exception.new({ code: Code.INTERNAL_ERROR, data: details });
		}
	}
}
