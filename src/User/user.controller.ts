import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserModel } from "./user.model";

@Controller("user")
export class UserController {

    constructor(readonly userService: UserService) { }

    @Get("/getAllUsers")
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get("/createUser")
    createUser(userModel: UserModel) {
        return this.userService.createUser(userModel);
    }

    @Get("/updateUser")
    updateUser(userModel: UserModel) {
        return this.userService.updateUser(userModel);
    }

    @Get("/deleteUser") // D - Delete
    deleteUser(userModel: UserModel) {
        return this.userService.deleteUser(userModel.id);
    }

    @Get("/getUserById") // R - Read
    getUserById(id: string) {
        return this.userService.getUserById(id);
    }
}