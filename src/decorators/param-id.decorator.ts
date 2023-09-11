import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const ParamId = createParamDecorator(
  (_: unknown, context: ExecutionContext) =>
    Number(context.switchToHttp().getRequest().params.id),
);
