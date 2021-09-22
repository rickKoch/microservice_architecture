import { Optional } from "@common/type/CommonTypes";
import { Code } from "@common/code/Code";
import { Exception } from "@common/exception/Exception";
import { ClassValidationDetails, ClassValidator } from "@common/util/class-validator/ClassValidator";

export class Entity<TIdentifier extends string | number> {
	protected id: Optional<TIdentifier>;

	public getId(): TIdentifier {
		if (typeof this.id === "undefined") {
			throw Exception.new({
				code: Code.INTERNAL_ERROR,
				overrideMessage: `${this.constructor.name}: ID is empty`,
			});
		}

		return this.id;
	}

	public async validate(): Promise<void> {
		const details: Optional<ClassValidationDetails> = await ClassValidator.validate(this);
		if (details) {
			throw Exception.new({ code: Code.INTERNAL_ERROR, data: details });
		}
	}
}
