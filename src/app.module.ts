import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PlayerModule} from './player/player.module';
import {SelectionModule} from './selection/selection.module';
import {TrainerModule} from './trainer/trainer.module';

@Module({
  imports: [PlayerModule, SelectionModule, TrainerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
