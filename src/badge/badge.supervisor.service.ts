import { Injectable } from "@nestjs/common"

@Injectable()
export class BadgeSupervisorService {

    private message;

    constructor() { };

    public async supervisor(body) {
        console.log("Badge supervisor logic...")
        return { badge: '', employeeName: '' }
    }

}