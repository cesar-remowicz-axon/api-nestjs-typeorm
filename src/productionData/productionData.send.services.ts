export class ProductionDataSendServices {

    private message;

    constructor() { };

    public async send(body) {
        const { goodFeed, badFeed, missingFeed, reworkFeed } = body;
        const { opNumber, odfNumber, machine } = body;
        return;
    }

}