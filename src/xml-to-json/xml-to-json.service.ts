import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as xml2js from 'xml2js';
import { JsonData, JsonDataDocument } from 'src/schemas/jsonData.schema';

@Injectable()
export class XmlToJsonService {
  constructor(
    @InjectModel(JsonData.name)
    private readonly JsonModel: Model<JsonDataDocument>,
  ) {}

  async parseXml(xmlData: string): Promise<any> {
    const parser = new xml2js.Parser({ explicitArray: false });
    return new Promise((resolve, reject) => {
      parser.parseString(xmlData, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async saveToMongo(jsonData: JsonData): Promise<JsonData> {
    const createdJson = new this.JsonModel(jsonData);
    const savedItem = await createdJson.save();
    console.log(savedItem,"------------------>>>")
    return savedItem;
  }
}
