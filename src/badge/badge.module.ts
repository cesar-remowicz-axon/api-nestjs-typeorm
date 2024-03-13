import { BadgeSupervisorService } from './badge.supervisor.service';
import { BadgeEmployeeService } from './badge.employee.service';
import { BadgeController } from './badge.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BadgeController],
  providers: [BadgeEmployeeService, BadgeSupervisorService],
})
export class BadgeModule {}
