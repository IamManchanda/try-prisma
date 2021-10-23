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
  async create(@Body() createInput: Prisma.BooksCreateInput) {
    const data = await this.booksService.create(createInput);
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
  async update(
    @Param("id") id: string,
    @Body() updateInput: Prisma.BooksUpdateInput,
  ) {
    const data = await this.booksService.update({ id: +id }, updateInput);
    return { success: true, errors: [], data };
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    await this.booksService.remove({ id: +id });
    return { success: true, errors: [], data: {} };
  }
}
