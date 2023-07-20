import { Injectable } from "@nestjs/common";
import {PrismaService} from '../prisma/prisma.service';
import { CreatePlayerDto } from "./DTO/post.dto";


@Injectable()
export class PlayerService{
    constructor(private readonly prisma:PrismaService){}

    async createPlayer(data:CreatePlayerDto){
        return this.prisma.players.create({data});
    }
}