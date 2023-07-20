import {NestMiddleware} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {Request,Response,NextFunction} from 'express';
import {createTrainerDto} from '../../trainer/DTO/post.dto';



export class checkDatasExist implements NestMiddleware{
    prisma = new PrismaClient()

    async use(req: Request, res: Response, next: NextFunction) {

        const {name,cpf}:createTrainerDto = req.body;

        const findName = await this.prisma.trainers.count({
            where:{
                name:name
            }
        })

        const findCpf = await this.prisma.trainers.count({
            where:{
                cpf:cpf
            }
        })


        if(findName){
            return res.status(409).json({error:'Trainer name already exists'});
        }

        if(findCpf){
            return res.status(409).json({error:'Trainer CPF already exists'});
        }

        await this.prisma.$disconnect();
        next();


    }
        
}
