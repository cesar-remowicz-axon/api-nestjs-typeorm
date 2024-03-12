import { Module } from '@nestjs/common';
import { ProductionDataController } from './productionData.controller';
import { ProductionDataSendServices } from './productionData.send.services';
import { ProductionDataStartServices } from './productionData.start.services';

@Module({
    imports: [],
    controllers: [ProductionDataController],
    providers: [ProductionDataSendServices, ProductionDataStartServices],
})

export class ProductionDataModule { };
