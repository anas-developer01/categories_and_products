// cats.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() cat: Cat) {
    try {
      const res = await this.catsService.create(cat);
      return res;
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    const res = await this.catsService.findAll();
    return res;
  }
}
