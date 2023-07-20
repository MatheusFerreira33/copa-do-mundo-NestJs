import { Module, NestModule, RequestMethod, MiddlewareConsumer} from "@nestjs/common";
import {checkDatasExist} from '../middlewares/player/player.middlewares';
import {PrismaModule} from '../prisma/prisma.module';
import {PlayerController} from './player.controller';
import {PlayerService} from './player.service';

@Module({
    imports:[PrismaModule],
    controllers:[PlayerController],
    providers:[PlayerService],
    exports:[],
})
export class PlayerModule implements NestModule{

    configure(consumer:MiddlewareConsumer){
        consumer
        .apply(checkDatasExist)
        .forRoutes({path:'player', method:RequestMethod.POST},
        {path:'player', method:RequestMethod.PATCH})
    }
}