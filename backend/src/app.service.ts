import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<object> {
    const user = await this.prisma.user.create({
      data: {
        email: 'test123@gmail.com',
        hash: 'hashe',
        hashedRt: 'hashhes',
      },
    });

    // console.log('USER', user);
    // const getUser = await this.prisma.user.findMany({});

    // console.log('USERSSS', getUser);
    // return getUser;

    return { msg: 'hello' };
  }
}
