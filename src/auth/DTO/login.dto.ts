import { IsString } from 'class-validator';

export class AuthLoginDto{

    @IsString()
    cpf:string

    @IsString()
    password:string
}