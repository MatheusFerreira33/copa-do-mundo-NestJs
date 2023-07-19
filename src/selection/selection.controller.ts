import { Body, Controller, Post,HttpStatus, Res,} from "@nestjs/common";
import {createSelectionDto} from './DTO/post.dto';
import {SelectionServices} from './selection.service';
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Controller('teams')
export class SelectionController{

    constructor(private readonly SelectionServices:SelectionServices){}
    
    @Post()
    async createSelection(@Body() body:createSelectionDto){
        return this.SelectionServices.createSelection(body);
    }


}