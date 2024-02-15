import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find().populate('category').exec();
  }

  async getProductById(id: string): Promise<Product> {
    return await this.productModel.findById(id).populate('category').exec();
  }

  async updateProduct(id: string, updatedProduct: Product): Promise<Product> {
    const existingProduct = await this.productModel.findByIdAndUpdate(
      id,
      updatedProduct,
      { new: true },
    );

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return existingProduct;
  }

  async deleteProduct(id: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return deletedProduct;
  }
}
