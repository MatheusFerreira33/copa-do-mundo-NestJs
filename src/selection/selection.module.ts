import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import {SelectionController} from './selection.controller';
import {PrismaModule} from '../prisma/prisma.module';
import {SelectionServices} from './selection.service';
import {checkDatasExist} from '../middlewares/selection/selection.middlewares';

@Module({
    controllers:[SelectionController],
    imports:[PrismaModule],
    exports:[],
    providers:[SelectionServices]
})
export class SelectionModule implements NestModule{
    
    configure(consumer:MiddlewareConsumer){
        consumer
        .apply(checkDatasExist)
        .forRoutes({path:'teams',method:RequestMethod.POST},
        {path:'teams', method:RequestMethod.PATCH}) 
    }
}
