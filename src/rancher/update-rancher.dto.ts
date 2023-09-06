import { PartialType } from '@nestjs/mapped-types';
import { CreateRancherDTO } from './create-rancher.dto';

export class UpdateRancherDTO extends PartialType(CreateRancherDTO) {}
