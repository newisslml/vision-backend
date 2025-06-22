import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) { }

    getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    createUser(userModel: UserModel) {
        return this.userRepository.createUser(userModel);
    }

    updateUser(userModel: UserModel) {
        return this.userRepository.updateUser(userModel);
    }

    deleteUser(id: string) {
        return this.userRepository.deleteUser(id);
    }

    getUserById(id: string) {
        return this.userRepository.getUserById(id);
    }

}