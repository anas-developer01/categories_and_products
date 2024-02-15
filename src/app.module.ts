import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from 'database/database.service';
import { XmlToJsonModule } from './xml-to-json/xml-to-json.module';
import { ProductModule } from './products/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseService,
    }),
    XmlToJsonModule,
    CategoryModule,
    ProductModule,
  ],
  providers: [DatabaseService],
})
export class AppModule {}
