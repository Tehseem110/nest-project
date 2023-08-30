import { Module } from '@nestjs/common';
import { DocToPdfService } from './doc-to-pdf.service';
import { DocToPdfController } from './doc-to-pdf.controller';

@Module({
  controllers: [DocToPdfController],
  providers: [DocToPdfService],
})
export class DocToPdfModule {}
