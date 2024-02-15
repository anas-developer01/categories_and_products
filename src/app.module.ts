// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseService } from 'database/database.service';
import { XmlToJsonModule } from './xml-to-json/xml-to-json.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseService,
    }),
    CatsModule,
    XmlToJsonModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
