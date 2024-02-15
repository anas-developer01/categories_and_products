import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from './product.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  category: number;
  
  @Prop({ type: [{ type: 'ObjectId', ref: 'Product' }] })
  products: Product[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
