import { Prisma } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

const booksSelection = {
  select: {
    id: true,
    title: true,
  },
};

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  create(createInput: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data: createInput,
      include: { books: booksSelection },
    });
  }

  findAll() {
    return this.prisma.author.findMany({
      include: { books: booksSelection },
    });
  }

  findOne(whereUniqueInput: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({
      where: whereUniqueInput,
      include: { books: booksSelection },
    });
  }

  update(
    whereUniqueInput: Prisma.AuthorWhereUniqueInput,
    updateInput: Prisma.AuthorUpdateInput,
  ) {
    return this.prisma.author.update({
      where: whereUniqueInput,
      data: updateInput,
      include: { books: booksSelection },
    });
  }

  remove(whereUniqueInput: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({
      where: whereUniqueInput,
    });
  }
}
