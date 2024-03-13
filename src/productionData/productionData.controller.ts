import { Body, Controller, Post, RawBodyRequest } from '@nestjs/common';
import { ProductionDataSendServices } from './productionData.send.services';
import { ProductionDataStartServices } from './productionData.start.services';

@Controller('productionData')
export class ProductionDataController {
  constructor(
    private readonly productionDataSend: ProductionDataSendServices,
    private readonly productionDataStart: ProductionDataStartServices,
  ) {}

  @Post('start')
  async start(@Body() body: RawBodyRequest<any>) {
    return await this.productionDataStart.start(body);
  }

  @Post('send')
  async send(@Body() body: RawBodyRequest<any>) {
    return await this.productionDataSend.send(body);
  }
}
