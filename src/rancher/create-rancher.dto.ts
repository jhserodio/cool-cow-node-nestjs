import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateRancherDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
  })
  password: string;

  @Type(() => Date)
  @IsDate()
  birthDate: Date;
}
