import { ModuleMetadata } from '@nestjs/common';
import { PingModule } from './ping/ping.module';

export const MODULES: NonNullable<ModuleMetadata['imports']> = [PingModule];
