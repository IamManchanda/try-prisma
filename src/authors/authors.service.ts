import { Prisma } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  create(createInput: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({ data: createInput });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateInput: Prisma.AuthorUpdateInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
