// import { InjectRepository } from '@nestjs/typeorm';
// import { Employee } from '../entities/employee.entity';
import { Injectable } from "@nestjs/common"
// import { Repository } from 'typeorm';

@Injectable()
export class BadgeEmployeeService {

    private message;

    constructor() { };
    // constructor(@InjectRepository(Employee) private user: Repository<Employee>) { };
    // constructor(
    //     private database
    // ) { };

    public async employee(body) {
        // console.log("Badge employee logic...", body);

        const response = { badge: '', employeeName: '', message: '' };

        if (!body.badge) {
            // console.log("Não existe");
            return response;
        }

        const { badge } = body;

        if (typeof badge === 'number') {
            // console.log("Badge não pode ser numero");
            return response;
        }

        if (badge === '0000') {
            // console.log("Não existe badge 0000");
            return response;
        }

        // const employee = await this.database("badgeSearchEmployee", {badge})
        // const employee = await this.user.findOne({ where: { badge } });

        return response
    }

}