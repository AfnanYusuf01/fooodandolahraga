import { Module } from '@nestjs/common';
import { FoodModule } from './food/food.module';
import { OlahragaModule } from './olahraga/olahraga.module';

@Module({
  imports: [OlahragaModule, FoodModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
