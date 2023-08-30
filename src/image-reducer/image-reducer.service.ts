import { Injectable,NotFoundException } from '@nestjs/common';

import * as sharp from 'sharp';

@Injectable()
export class ImageReducerService {
  async reduceImage(imageBuffer: Buffer, desiredSize: string, desiredWidth: string) {
    try {
      const desiredWidths = parseInt(desiredWidth)
      const desiredSizeValue = parseInt(desiredSize);
      const bytesPerUnit =   1024 ;
      const maxSizeInBytes = desiredSizeValue * bytesPerUnit;

      if (imageBuffer.length <= maxSizeInBytes) {
        throw new Error('Uploaded image size is already within the specified limit');
      }
      
      if (imageBuffer.length > maxSizeInBytes) {
        
        const resizedImage =  sharp(imageBuffer)
          .resize({ width: desiredWidths || 720 })
          .jpeg({ quality: desiredSizeValue }); 
        
        imageBuffer = await resizedImage.toBuffer();
      }

      return imageBuffer; 
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }
}
