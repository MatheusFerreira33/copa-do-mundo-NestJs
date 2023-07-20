import { IsPositive, IsString, MaxLength } from 'class-validator';

export class createTrainerDto{

    @IsString()
    name:string

    @IsPositive()
    age:number

    @IsString()
    @MaxLength(11)
    cpf:string

    @IsString()
    @MaxLength(50)
    password:string
}