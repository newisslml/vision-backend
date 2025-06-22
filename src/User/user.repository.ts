import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Core/prisma.service";

@Injectable()
export class UserRepository {

    constructor(private readonly prismaService: PrismaService) { }
    getAllUsers() {
        return this.prismaService.user.findMany();
    }

}