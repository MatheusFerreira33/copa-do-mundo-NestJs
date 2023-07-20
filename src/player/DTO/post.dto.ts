import { IsPositive, IsString, MaxLength } from 'class-validator';

export class CreatePlayerDto{

    @IsString()
    @MaxLength(35)
    name:string

    @IsPositive()
    age:number

    @IsString()
    @MaxLength(11)
    cpf:string

    @IsString()
    @MaxLength(50)
    position:string

    @IsString()
    @MaxLength(50)
    password:string
}