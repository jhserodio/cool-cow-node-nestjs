import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateRancherDTO } from './dto/create-rancher.dto';
import { UpdateRancherDTO } from './dto/update-rancher.dto';
import { RancherService } from './rancher.service';
import { ParamId } from 'src/decorators/param-id.decorator';

@Controller('ranchers')
export class RancherController {
  constructor(private readonly rancherService: RancherService) {}

  @Get(':id')
  async get(@ParamId() id: number) {
    return this.rancherService.get(id);
  }

  @Get()
  async list(): Promise<CreateRancherDTO[]> {
    return this.rancherService.list();
  }

  @Post()
  async add(@Body() body: CreateRancherDTO) {
    return this.rancherService.create(body);
  }

  @Put(':id')
  async update(@Body() body: UpdateRancherDTO, @ParamId() id: number) {
    return this.rancherService.update(id, body);
  }

  @Delete(':id')
  async remove(@ParamId() id: number) {
    return this.rancherService.delete(id);
  }
}
