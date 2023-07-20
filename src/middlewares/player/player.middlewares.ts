import {NestMiddleware} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {Request,Response,NextFunction} from 'express';
import {CreatePlayerDto} from '../../player/DTO/post.dto';


export class checkDatasExist implements NestMiddleware{
    prisma = new PrismaClient()

    async use(req: Request, res: Response, next: NextFunction) {

        const {name,cpf}:CreatePlayerDto = req.body;

        const findName = await this.prisma.players.count({
            where:{
                name:name
            }
        })

        const findCpf = await this.prisma.players.count({
            where:{
                cpf:cpf
            }
        })


        if(findName){
            return res.status(409).json({error:'Player name already exists'});
        }

        if(findCpf){
            return res.status(409).json({error:'Player CPF already exists'});
        }

        await this.prisma.$disconnect();
        next();


    }
        
}
