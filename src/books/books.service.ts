import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from ".prisma/client";

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(booksCreateInput: Prisma.BooksCreateInput) {
    return this.prisma.books.create({
      data: booksCreateInput,
    });
  }

  findAll() {
    return this.prisma.books.findMany();
  }

  findOne(bookWhereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  update(
    bookWhereUniqueInput: Prisma.BooksWhereUniqueInput,
    booksUpdateInput: Prisma.BooksUpdateInput,
  ) {
    return this.prisma.books.update({
      where: bookWhereUniqueInput,
      data: booksUpdateInput,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
