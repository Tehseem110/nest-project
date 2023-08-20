// create-image-reducer.dto.ts
export class CreateImageReducerDto {
    static desiredWidth(buffer: any, desiredSize: (buffer: any, desiredSize: any, desiredWidth: any) => void, desiredWidth: any) {
      throw new Error('Method not implemented.');
    }
    static desiredSize(buffer: any, desiredSize: any, desiredWidth: any) {
      throw new Error('Method not implemented.');
    }
    desiredSize: string; // Example: "50KB"
    desiredWidth?: number; // Optional
    filename?: string; // Optional filename for download
  }
  