import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Core/prisma.service";
import { UserModel } from "./user.model";

@Injectable()
export class UserRepository {

    constructor(private readonly prismaService: PrismaService) { }

    getAllUsers() {
        return this.prismaService.user.findMany();
    }

    createUser(userModel: UserModel) {
        return this.prismaService.user.create({
            data: userModel
        });
    }

    updateUser(userModel: UserModel) {
        return this.prismaService.user.update({
            where: { id: userModel.id },
            data: userModel
        })
    }

    deleteUser(id: string) {
        return this.prismaService.user.update({
            where: { id },
            data: { active: false }
        });
    }

    getUserById(id: string) {
        return this.prismaService.user.findUnique({
            where: { id }
        });
    }
}