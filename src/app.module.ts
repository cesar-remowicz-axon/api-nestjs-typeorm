// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { Employee } from './employee.entity';
import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './typeOrm/typeorm.module';
import { BadgeModule } from './badge/badge.module';
import { ProductionDataModule } from './productionData/productionData.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  // imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
  //   type: 'mssql',
  //   username: process.env['DB_USER'],
  //   password: process.env['DB_PWD'],
  //   database: process.env['DB_SCHEMA'],
  //   host: process.env['host'],
  //   options: {
  //     encrypt: false,
  //     trustServerCertificate: true,
  //   },
  //   entities: ["dist/**/*.js"],
  // }), TypeOrmModule.forFeature([Employee]), BadgeModule],
  imports: [
    TypeOrmConfigModule,
    BadgeModule,
    ProductionDataModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static/'),
      // serveRoot: '/public/'
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
