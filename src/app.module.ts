import { Module } from '@nestjs/common';
import { RancherModule } from './rancher/rancher.module';

@Module({
  imports: [RancherModule],
})
export class AppModule {}
