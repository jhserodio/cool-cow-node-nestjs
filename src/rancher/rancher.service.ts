import { Injectable } from '@nestjs/common';
import { CreateRancherDTO } from './create-rancher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RancherService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, email, password }: CreateRancherDTO) {
    return this.prisma.rancher.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
}
