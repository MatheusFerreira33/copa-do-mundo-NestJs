import { Module, NestModule, MiddlewareConsumer, RequestMethod} from "@nestjs/common";
import {TrainerController } from './trainer.controller';
import {TrainerService} from './trainer.service';
import {PrismaModule} from '../prisma/prisma.module';
import {checkDatasExist} from '../middlewares/trainer/trainer.middlewares';

@Module({
    imports:[PrismaModule],
    controllers:[TrainerController],
    providers:[TrainerService],
    exports:[TrainerService]
})
export class TrainerModule implements NestModule{

    configure(consumer:MiddlewareConsumer){
        consumer
        .apply(checkDatasExist)
        .forRoutes({path:'trainer', method:RequestMethod.POST},
        {path:'trainer', method:RequestMethod.PATCH})
    }
}