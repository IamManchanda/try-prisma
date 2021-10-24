import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from ".prisma/client";

const authorsSelection = {
  select: {
    name: true,
  },
};

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createInput: Prisma.BookUncheckedCreateInput) {
    return this.prisma.book.create({
      data: createInput,
      include: { author: authorsSelection },
    });
  }

  findAll() {
    return this.prisma.book.findMany({
      include: { author: authorsSelection },
    });
  }

  findOne(whereUniqueInput: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.findUnique({
      where: whereUniqueInput,
      include: { author: authorsSelection },
    });
  }

  update(
    whereUniqueInput: Prisma.BookWhereUniqueInput,
    updateInput: Prisma.BookUpdateInput,
  ) {
    return this.prisma.book.update({
      where: whereUniqueInput,
      data: updateInput,
      include: { author: authorsSelection },
    });
  }

  remove(whereUniqueInput: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.delete({
      where: whereUniqueInput,
    });
  }
}
