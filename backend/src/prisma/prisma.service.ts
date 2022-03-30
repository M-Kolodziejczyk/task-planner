import { PrismaClient } from '@prisma/client';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect().catch((err) => console.log(err));
  }

  async onModuleDestroy() {
    await this.$disconnect().catch((err) => console.log(err));
  }
}
