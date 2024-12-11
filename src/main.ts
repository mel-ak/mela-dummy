import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 5555;
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  await app.listen(PORT);
}
bootstrap();
