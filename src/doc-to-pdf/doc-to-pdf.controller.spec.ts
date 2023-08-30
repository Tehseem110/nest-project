import { Test, TestingModule } from '@nestjs/testing';
import { DocToPdfController } from './doc-to-pdf.controller';
import { DocToPdfService } from './doc-to-pdf.service';

describe('DocToPdfController', () => {
  let controller: DocToPdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocToPdfController],
      providers: [DocToPdfService],
    }).compile();

    controller = module.get<DocToPdfController>(DocToPdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
