import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PlayerModule} from './player/player.module';
import {SelectionModule} from './selection/selection.module';
import {TrainerModule} from './trainer/trainer.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SelectionModule, TrainerModule, PlayerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
