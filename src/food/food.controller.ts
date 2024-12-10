import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('food')
@Controller('food')
export class FoodController {
    private foodData = [
        { id: 1, name: 'Apple', calories: 52, fat: 0.2, protein: 0.3, img: '/assets/apple.jpg' },
        { id: 2, name: 'Banana', calories: 96, fat: 0.3, protein: 1.3, img: '/assets/banana.jpg' },
        { id: 3, name: 'Orange', calories: 47, fat: 0.1, protein: 0.9, img: '/assets/orange.jpg' },
        { id: 4, name: 'Strawberry', calories: 32, fat: 0.3, protein: 0.7, img: '/assets/strawberry.jpg' },
        { id: 5, name: 'Grapes', calories: 69, fat: 0.2, protein: 0.7, img: '/assets/grapes.jpg' },
        { id: 6, name: 'Watermelon', calories: 30, fat: 0.2, protein: 0.6, img: '/assets/watermelon.jpg' },
        { id: 7, name: 'Pineapple', calories: 50, fat: 0.1, protein: 0.5, img: '/assets/pineapple.jpg' },
        { id: 8, name: 'Peach', calories: 39, fat: 0.2, protein: 0.9, img: '/assets/peach.jpg' },
        { id: 9, name: 'Mango', calories: 60, fat: 0.4, protein: 0.8, img: '/assets/mango.jpg' },
        { id: 10, name: 'Blueberry', calories: 57, fat: 0.3, protein: 0.7, img: '/assets/blueberry.jpg' },
        { id: 11, name: 'Papaya', calories: 59, fat: 0.2, protein: 0.9, img: '/assets/papaya.jpg' },
        { id: 12, name: 'Avocado', calories: 160, fat: 15, protein: 2, img: '/assets/avocado.jpg' },
        { id: 13, name: 'Tomato', calories: 18, fat: 0.2, protein: 0.9, img: '/assets/tomato.jpg' },
        { id: 14, name: 'Carrot', calories: 41, fat: 0.2, protein: 0.9, img: '/assets/carrot.jpg' },
        { id: 15, name: 'Cucumber', calories: 16, fat: 0.1, protein: 0.7, img: '/assets/cucumber.jpg' },
        { id: 16, name: 'Lettuce', calories: 5, fat: 0.1, protein: 0.3, img: '/assets/lettuce.jpg' },
        { id: 17, name: 'Spinach', calories: 23, fat: 0.4, protein: 2.9, img: '/assets/spinach.jpg' },
        { id: 18, name: 'Broccoli', calories: 55, fat: 0.6, protein: 3.7, img: '/assets/broccoli.jpg' },
        { id: 19, name: 'Cauliflower', calories: 25, fat: 0.3, protein: 1.9, img: '/assets/cauliflower.jpg' },
      ];

  @Get()
  @ApiResponse({ status: 200, description: 'Get all food data', type: [Object] })
  getAllFood() {
    return this.foodData;
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID of the food item' })
  @ApiResponse({ status: 200, description: 'Get food by ID', type: Object })
  getFoodById(@Param('id') id: string) {
    const food = this.foodData.find((item) => item.id === parseInt(id, 10));
    if (!food) {
      return { message: 'Food not found' };
    }
    return food;
  }
}
