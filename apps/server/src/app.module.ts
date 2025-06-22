import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MODULES } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '../.env', '../../.env', '../../../.env'],
      isGlobal: true,
    }),
    ...MODULES,
  ],
})
export class AppModule {}
