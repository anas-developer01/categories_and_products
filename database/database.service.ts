// database.service.ts
import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class DatabaseService implements MongooseOptionsFactory {
  async createMongooseOptions(): Promise<MongooseModuleOptions> {
    try {
      const uri = process.env.MY_DB_KEY;

      if (!uri) {
        throw new Error(
          'MongoDB connection string is missing in environment variables.',
        );
      }

      return {
        uri,
      };
    } catch (error) {
      console.error('Error during MongoDB connection setup:', error);
      throw error;
    }
  }
}
