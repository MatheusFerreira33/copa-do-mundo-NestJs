import { NestMiddleware } from "@nestjs/common";
import {Request,Response,NextFunction} from 'express';
import {PrismaClient} from '@prisma/client';
import { createSelectionDto } from "src/selection/DTO/post.dto";


export class checkDatasExist implements NestMiddleware{
    prisma = new PrismaClient();

   async use(req: Request, res: Response, next: NextFunction) {

        const {name,fifa_code}:createSelectionDto = req.body;

        const findName = await this.prisma.selections.count({
            where:{
                name:name
        }})

        const findFifaCode = await this.prisma.selections.count({
            where:{
                fifa_code:fifa_code
            }
        })

        if(findName){
            return res.status(409).json({error:'Selection name already exists'});
        }

        if(findFifaCode){
            return res.status(409).json({error:'Fifa Code name already exists'});
        }

        await this.prisma.$disconnect();

        next();
       
    }
}