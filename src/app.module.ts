import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageReducerModule } from './image-reducer/image-reducer.module';
import { DocToPdfModule } from './doc-to-pdf/doc-to-pdf.module';

@Module({
  imports: [ImageReducerModule, DocToPdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
