import { Test, TestingModule } from '@nestjs/testing';
import { DocToPdfService } from './doc-to-pdf.service';

describe('DocToPdfService', () => {
  let service: DocToPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocToPdfService],
    }).compile();

    service = module.get<DocToPdfService>(DocToPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
