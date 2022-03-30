import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
