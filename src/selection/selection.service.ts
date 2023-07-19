import { Injectable } from "@nestjs/common";
import {PrismaService} from '../prisma/prisma.service';
import {createSelectionDto} from './DTO/post.dto';


@Injectable()
export class SelectionServices{

    constructor(private readonly prisma:PrismaService){}

    async createSelection(data:createSelectionDto){

        return this.prisma.selections.create({
            data:{
                ...data,
                first_cup: new Date(data.first_cup),
        }})
    }


}