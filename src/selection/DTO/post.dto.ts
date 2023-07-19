import { IsPositive, IsString, IsDateString, MaxLength, IsObject, IsOptional, ValidateNested } from 'class-validator';

export class createSelectionDto{

    @IsString()
    @MaxLength(50)
    name:string

    @IsPositive()
    titles: number

    @IsString()
    @MaxLength(25)
    top_scorer:string

    @IsString()
    @MaxLength(5)
    fifa_code:string

    @IsDateString()
    first_cup:string
}