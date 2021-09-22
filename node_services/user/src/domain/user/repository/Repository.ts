import { User } from "../entity/User";

export default interface Repository {
	createUser(payload: User): Promise<User>;
}
