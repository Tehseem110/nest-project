import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageReducerModule } from './image-reducer/image-reducer.module';

@Module({
  imports: [ImageReducerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
