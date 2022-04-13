import { NestFactory } from '@nestjs/core';
import { ItemsModule } from './modules/items.module';

async function bootstrap() {
  const app = await NestFactory.create(ItemsModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
