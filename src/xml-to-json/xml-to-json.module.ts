import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { XmlToJsonController } from './xml-to-json.controller';
import { XmlToJsonService } from './xml-to-json.service';
import { JsonData, JsonDataSchema } from 'src/schemas/jsonData.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JsonData.name, schema: JsonDataSchema },
    ]),
  ],
  controllers: [XmlToJsonController],
  providers: [XmlToJsonService],
})
export class XmlToJsonModule {}
