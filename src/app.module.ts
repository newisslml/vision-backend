import { Module } from '@nestjs/common';
import { UserModule } from './User/_user.module';
import { PrismaService } from './Core/prisma.service';

@Module({
  imports: [UserModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule { }
