import {Body, Controller, Post} from '@nestjs/common';
import {CreatePlayerDto} from './DTO/post.dto';
import {PlayerService} from './player.service';

@Controller('player')
export class PlayerController{

    constructor(private readonly PlayerService:PlayerService){}

    @Post()
    async createPlayer(@Body() body:CreatePlayerDto){
        return this.PlayerService.createPlayer(body);
    }

}