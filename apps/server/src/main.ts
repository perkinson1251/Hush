import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('BACKEND_PORT') || 3000;

  app.setGlobalPrefix('api');

  await app.listen(port);
  console.log(`Application is running on port ${port}`);
  console.log(`API available at: http://localhost:${port}/api`);
}

void bootstrap();
