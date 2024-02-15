import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { XmlToJsonService } from './xml-to-json.service';
import { Express } from 'express';

@Controller('xml-to-json')
export class XmlToJsonController {
  constructor(private readonly xmlToJsonService: XmlToJsonService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('xmlFile'))
  async convertAndSave(
    @UploadedFile() xmlFile: Express.Multer.File,
  ){
    try {
      if (!xmlFile) {
        return { message: 'No file uploaded' };
      }

      const xmlData = xmlFile.buffer.toString();
      const jsonData = await this.xmlToJsonService.parseXml(xmlData);
      const savedData = await this.xmlToJsonService.saveToMongo({
        json: jsonData,
      });

      return savedData;
    } catch (error) {
      console.error('Error processing XML:', error);
      return { error: 'Error processing XML file' };
    }
  }
}
