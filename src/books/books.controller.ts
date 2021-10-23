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
import { Prisma } from ".prisma/client";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() booksCreateInput: Prisma.BooksCreateInput) {
    return this.booksService.create(booksCreateInput);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.booksService.findOne({ id: +id });
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() booksUpdateInput: Prisma.BooksUpdateInput,
  ) {
    return this.booksService.update({ id: +id }, booksUpdateInput);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.booksService.remove(+id);
  }
}
