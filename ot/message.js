
export default class OTMessage {

    constructor(op, revision) {
        this.op = op;
        this.revision = revision; // index of last known server state
    }

}