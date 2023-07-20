import { Injectable } from "@nestjs/common";
import {PrismaService} from '../prisma/prisma.service';
import {createTrainerDto} from './DTO/post.dto';

@Injectable()
export class TrainerService{

    constructor(private readonly prisma:PrismaService){}

    async createTrainer(data:createTrainerDto){

        return this.prisma.trainers.create({data});
    }

}