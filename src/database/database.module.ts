import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'node:path';
import { envs } from 'src/config/envs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: envs.db.url,
      ssl: true,
      entities: [path.join(__dirname, '../entities/*.{ts,js}')],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class DatabaseModule {}
