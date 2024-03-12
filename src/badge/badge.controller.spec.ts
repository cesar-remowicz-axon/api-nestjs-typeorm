import { Test, TestingModule } from '@nestjs/testing';
import { BadgeController } from './badge.controller';
import { BadgeSupervisorService } from './badge.supervisor.service';
import { BadgeEmployeeService } from './badge.employee.service';

describe('BadgeController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [BadgeController],
            providers: [BadgeSupervisorService, BadgeEmployeeService],
        }).compile();
    });

    it('Should check for badge', async () => {
        const body = { badge: '', employeeName: '', message: '' }
        const badgeController = app.get(BadgeController);
        const response = await badgeController.employee(body);
        expect(response).toStrictEqual({ badge: '', message: '', employeeName: '' })
    });


    // describe('getHello', () => {
    //     it('should return "Hello World!"', (body) => {
    //         const badgeController = app.get(BadgeController);
    //         expect(badgeController.employee(body)).toBe({});
    //     });
    // });


});
