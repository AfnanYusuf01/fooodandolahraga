import { Module } from '@nestjs/common';
import { OlahragaController } from './olahraga.controller';

@Module({
  controllers: [OlahragaController]
})
export class OlahragaModule {}
