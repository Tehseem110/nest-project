import {
  Controller,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageReducerService } from './image-reducer.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageReducerService: ImageReducerService) {}

  @Post('reduce')
  @UseInterceptors(FileInterceptor('image'))
  async reduceImage(@UploadedFile() image, @Req() req, @Res() res) {
    try {
      if (!image) {
        return res.status(400).send('Image is required');
      }

      const { desiredSize, desiredWidth } = req.body;
      const reducedImageBuffer = await this.imageReducerService.reduceImage(
        image.buffer,
        desiredSize,
        desiredWidth,
      );

      // Set response headers for download
      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader(
        'Content-Disposition',
        'attachment; filename="reduced_image.jpg"',
      );
      res.send(reducedImageBuffer);
    } catch (err) {
      // Log and handle errors
      console.log(err.message);
      res.status(500).send('Internal Server Error');
    }
  }
}
