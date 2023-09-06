import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RancherModule } from './rancher/rancher.module';

@Module({
  imports: [RancherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
