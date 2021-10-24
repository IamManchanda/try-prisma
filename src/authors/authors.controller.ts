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
import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Controller("authors")
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    const data = await this.authorsService.create(createAuthorDto);
    return { data: data || {} };
  }

  @Get()
  async findAll() {
    const data = await this.authorsService.findAll();
    return { data: data || {} };
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const data = await this.authorsService.findOne({ id });
    return { data: data || {} };
  }

  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    const data = await this.authorsService.update({ id }, updateAuthorDto);
    return { data: data || {} };
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    await this.authorsService.remove({ id });
    return { data: {} };
  }
}
