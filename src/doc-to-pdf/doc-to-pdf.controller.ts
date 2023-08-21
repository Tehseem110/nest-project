import { Controller } from '@nestjs/common';
import { DocToPdfService } from './doc-to-pdf.service';

@Controller('doc-to-pdf')
export class DocToPdfController {
  constructor(private readonly docToPdfService: DocToPdfService) {}
}
