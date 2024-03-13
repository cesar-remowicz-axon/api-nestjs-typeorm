import { Body, Controller, Post, RawBodyRequest } from '@nestjs/common';
import { Employee } from 'src/entities/employee.entity';
import { BadgeEmployeeService } from './badge.employee.service';
import { BadgeSupervisorService } from './badge.supervisor.service';

@Controller('badge')
export class BadgeController {
  constructor(
    private readonly employeeService: BadgeEmployeeService,
    private readonly supervisorService: BadgeSupervisorService,
  ) {}

  @Post('employee')
  async employee(@Body() body: RawBodyRequest<any>): Promise<Employee> {
    return await this.employeeService.employee(body);
  }

  @Post('supervisor')
  async supervisor(@Body() body: RawBodyRequest<any>): Promise<Employee> {
    return await this.supervisorService.supervisor(body);
  }
}
