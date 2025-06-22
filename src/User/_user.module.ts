import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/Core/prisma.service';
import { UserRepository } from './user.repository';

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository, PrismaService],
    exports: [UserService],
})
export class UserModule { }

