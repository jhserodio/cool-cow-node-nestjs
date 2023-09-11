import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRancherDTO } from './create-rancher.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRancherDTO } from './update-rancher.dto';

@Injectable()
export class RancherService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRancherDTO) {
    return this.prisma.rancher.create({
      data,
    });
  }

  async list() {
    return this.prisma.rancher.findMany();
  }

  async get(id: number) {
    return this.prisma.rancher.findUnique({ where: { id } });
  }

  async update(id: number, rancher: UpdateRancherDTO) {
    await this.exists(id);

    return this.prisma.rancher.update({
      data: rancher,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    await this.exists(id);

    return this.prisma.rancher.delete({ where: { id } });
  }

  private async exists(id: number) {
    if (!(await this.get(id))) {
      throw new NotFoundException(`Rancher id: ${id} not registred`);
    }
  }
}
