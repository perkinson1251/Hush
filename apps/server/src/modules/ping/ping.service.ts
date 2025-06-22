import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  ping() {
    return {
      message: 'pong',
      timestamp: new Date().toISOString(),
    };
  }

  healthCheck() {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    };
  }
}
