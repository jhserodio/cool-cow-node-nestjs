import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRancherDTO } from './create-rancher.dto';
import { UpdateRancherDTO } from './update-rancher.dto';
import { RancherService } from './rancher.service';

@Controller('ranchers')
export class RancherController {
  constructor(private readonly rancherService: RancherService) {}

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return `João Henrique Serodio ${id}`;
  }

  @Get()
  async list(): Promise<string[]> {
    return ['João Henrique Serodio', 'Marina Aparecida Serodio'];
  }

  @Post()
  async add(@Body() body: CreateRancherDTO): Promise<CreateRancherDTO> {
    return this.rancherService.create(body);
  }

  @Put(':id')
  async update(
    @Body() body: UpdateRancherDTO,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ body: UpdateRancherDTO; id: number }> {
    return { body, id };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return `remove user ${id}`;
  }
}
