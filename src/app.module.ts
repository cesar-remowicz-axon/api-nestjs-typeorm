import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'mssql',
    username: process.env['DB_USER'],
    password: process.env['DB_PWD'],
    database: process.env['DB_SCHEMA'],
    host: process.env['host'],
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
    entities: ["dist/**/*.js"],
  }), TypeOrmModule.forFeature([Employee])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
