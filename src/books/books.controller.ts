import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
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
    return { data: data || {} };
  }

  @Get()
  async findAll() {
    const data = await this.booksService.findAll();
    return { data: data || {} };
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const data = await this.booksService.findOne({ id });
    return { data: data || {} };
  }

  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    const data = await this.booksService.update({ id }, updateBookDto);
    return { data: data || {} };
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    await this.booksService.remove({ id });
    return { data: {} };
  }
}
