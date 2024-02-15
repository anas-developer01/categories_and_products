import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JsonDataDocument = JsonData & Document;

@Schema()
export class JsonData {
  @Prop({ required: true, type: Object })
  json: Record<string, any>;
}

export const JsonDataSchema = SchemaFactory.createForClass(JsonData);
