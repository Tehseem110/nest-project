import { Module } from '@nestjs/common';
import { ImageReducerService } from './image-reducer.service';
import { ImageController } from './image-reducer.controller';

@Module({
  controllers: [ImageController],
  providers: [ImageReducerService],
})
export class ImageReducerModule {}
