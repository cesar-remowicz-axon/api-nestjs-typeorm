import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
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
    }),
    TypeOrmModule.forFeature([Employee]), // Adicione todas as entidades que você deseja usar nos repositórios
    ],
    exports: [TypeOrmModule], // Exporte o módulo para que outros módulos possam usá-lo
})
export class TypeOrmConfigModule { }
