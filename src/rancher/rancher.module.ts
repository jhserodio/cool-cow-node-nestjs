import { Module } from '@nestjs/common';
import { RancherController } from './rancher.controller';
import { RancherService } from './rancher.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RancherController],
  providers: [RancherService],
})
export class RancherModule {}
