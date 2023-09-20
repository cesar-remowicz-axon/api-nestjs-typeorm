import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(@InjectRepository(Employee) private user: Repository<Employee>) { };

  async getHello(body: { badge: string }): Promise<Employee> {

    if (!body) {
      return new Employee;
    }
    const { badge } = body;

    if (!badge) {
      return new Employee;
    }
    const employee = await this.user.findOne({ where: { badge } });
    return employee;
  }

}
