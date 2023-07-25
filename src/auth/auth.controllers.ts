import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import {PrismaService} from '../prisma/prisma.service';
import {AuthLoginDto} from './DTO/login.dto';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController{

    constructor(private readonly prisma:PrismaService,
         private readonly authservice:AuthService
         
         ){}

    @Post('login')
    async login(@Body() {cpf,password}:AuthLoginDto){

        const user = await this.prisma.trainers.findFirst({
            where:{
                cpf,
                password
            }
        })

        if(!user){
            throw new UnauthorizedException('Email ou senha incorretos')
        }

        return this.authservice.createToken(user);
    }
}