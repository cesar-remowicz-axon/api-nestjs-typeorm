import { Body, Controller, Post, RawBodyRequest } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './employee.entity';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Post()
  async getHello(@Body() body: RawBodyRequest<any>): Promise<Employee> {
    return await this.appService.getHello(body);
  }

}
