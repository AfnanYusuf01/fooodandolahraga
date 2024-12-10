import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static assets (images)
  app.useStaticAssets(join(__dirname, '..', 'assets'), {
    prefix: '/assets/',
  });

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Food and Olahraga API')
    .setDescription('API for managing food and olahraga (exercise) data')
    .setVersion('1.0')
    .addTag('food')
    .addTag('olahraga')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
