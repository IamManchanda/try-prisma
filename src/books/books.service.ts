import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from ".prisma/client";

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createInput: Prisma.BooksCreateInput) {
    return this.prisma.books.create({
      data: createInput,
    });
  }

  findAll() {
    return this.prisma.books.findMany();
  }

  findOne(whereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({
      where: whereUniqueInput,
    });
  }

  update(
    whereUniqueInput: Prisma.BooksWhereUniqueInput,
    booksUpdateInput: Prisma.BooksUpdateInput,
  ) {
    return this.prisma.books.update({
      where: whereUniqueInput,
      data: booksUpdateInput,
    });
  }

  remove(whereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where: whereUniqueInput,
    });
  }
}
