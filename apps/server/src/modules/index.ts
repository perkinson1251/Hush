import { ModuleMetadata } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { PingModule } from './ping/ping.module';

export const MODULES: NonNullable<ModuleMetadata['imports']> = [
  PingModule,
  ChatModule,
];
