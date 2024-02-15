import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/schemas/category.schema';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() category: Category) {
    try {
      const res = await this.categoryService.create(category);
      return res;
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll(): Promise<Category[]> {
    const res = await this.categoryService.findAll();
    return res;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() category: Category) {
    try {
      const res = await this.categoryService.update(id, category);
      return res;
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const res = await this.categoryService.delete(id);
      return res;
    } catch (error) {
      return error;
    }
  }
}
