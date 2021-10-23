import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const data = await this.booksService.create(createBookDto);
    return { success: true, errors: [], data };
  }

  @Get()
  async findAll() {
    const data = await this.booksService.findAll();
    return { success: true, errors: [], data };
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const data = await this.booksService.findOne({ id: +id });
    return { success: true, errors: [], data };
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    const data = await this.booksService.update({ id: +id }, updateBookDto);
    return { success: true, errors: [], data };
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    await this.booksService.remove({ id: +id });
    return { success: true, errors: [], data: {} };
  }
}
