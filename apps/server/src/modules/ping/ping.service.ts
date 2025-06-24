import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class PingService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource
  ) {}

  ping() {
    return {
      message: 'pong',
      timestamp: new Date().toISOString(),
    };
  }

  async healthCheck() {
    const dbStatus = await this.checkDatabaseStatus();

    return {
      status: dbStatus.isConnected ? 'ok' : 'error',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      database: dbStatus,
    };
  }

  private async checkDatabaseStatus() {
    try {
      const result: Array<{ ping: number }> =
        await this.dataSource.query('SELECT 1 as ping');

      return {
        isConnected: true,
        status: 'connected',
        responseTime: Date.now(),
        details:
          result[0]?.ping === 1 ? 'Database responding' : 'Unexpected response',
      };
    } catch (error: unknown) {
      let errorMessage = 'Unknown error';
      if (error && typeof error === 'object' && 'message' in error) {
        errorMessage = String((error as { message?: unknown }).message);
      }
      return {
        isConnected: false,
        status: 'error',
        error: errorMessage,
        details: 'Database connection failed',
      };
    }
  }
}
