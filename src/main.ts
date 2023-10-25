import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS para permitir solicitudes desde Postman
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
