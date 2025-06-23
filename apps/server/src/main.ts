import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('BACKEND_PORT') || 3000;

  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api');
  await app.listen(port);

  logger.log(`Application is running on port ${port}`);
  logger.log(`API available at: http://localhost:${port}/api`);
}

void bootstrap();
