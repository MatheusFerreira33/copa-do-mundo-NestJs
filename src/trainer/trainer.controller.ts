import {Controller, Post, Body} from '@nestjs/common';
import {createTrainerDto} from './DTO/post.dto';
import {TrainerService} from './trainer.service';

@Controller('trainer')
export class TrainerController{

    constructor(private readonly TrainerService:TrainerService){}

    @Post()
    async createTrainer(@Body() body:createTrainerDto){
        return this.TrainerService.createTrainer(body);
    }
}