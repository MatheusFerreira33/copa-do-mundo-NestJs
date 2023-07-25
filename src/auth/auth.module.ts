import {Module } from "@nestjs/common";
import {JwtModule} from '@nestjs/jwt';
import {PrismaModule} from '../prisma/prisma.module';
import {AuthController} from './auth.controllers';
import { TrainerModule } from "src/trainer/trainer.module";
import { AuthService } from "./auth.service";

@Module({
    imports:[JwtModule.register({secret:'aeN9n&TYUn6c&TY7=w?5k9pdYCA$?d+H'}), PrismaModule],
    controllers: [AuthController],
    providers:[AuthService],
})
export class AuthModule{}