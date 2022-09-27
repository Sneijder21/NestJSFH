import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist solo deja la data que se espera.
      whitelist: true,
      // property that can not exist.
      forbidNonWhitelisted: true
    })
  )
  await app.listen(3000);
}
bootstrap();
