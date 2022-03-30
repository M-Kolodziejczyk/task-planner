import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';

import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<object> {
    console.log('HELLLO enpoint');
    const user = await this.prisma.user.create({
      data: {
        email: 'test123@gmail.com',
        hash: 'hashe',
        hashedRt: 'hashhes',
      },
    });

    // const users = await this.prisma.user.findMany();
    // console.log('first', users);
    // this.prisma.user.create

    // console.log('USER', user);
    // const getUser = await this.prisma.user.findMany({});

    // console.log('USERSSS', getUser);
    // return getUser;

    return { msg: 'hello', user };
  }
}
