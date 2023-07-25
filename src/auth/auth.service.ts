import { Injectable } from "@nestjs/common";
import {JwtService} from '@nestjs/jwt';
import { trainers } from "@prisma/client";

@Injectable()
export class AuthService{
    constructor(private readonly jwtservice:JwtService){}

    async createToken(user:trainers){

        return {
            token: this.jwtservice.sign({
                cpf:user.cpf
            },{
                expiresIn:'1 days',
                subject:String(user.id),
                issuer:'login',
                audience:'trainers'
            })
        }
    }

    async checkToken(token:string){
         
    }
}