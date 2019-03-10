import {OTController} from "./ot_controller";
import OTMessage from "./message";

export class OTControllerServer extends OTController {

    constructor(messagingService) {
        super();
        this.history = [];
        this.currentRevision = 0;
        this.messagingService = messagingService;
    }

    sendAll(op) {
        this.currentRevision++;
        let msg = new OTMessage(op, this.currentRevision);
        this.messagingService.send(msg)
    }

    recieve(msg) {
        let newOps = this.history.splice(msg.revision);
        let composed = newOps.reduce(this.compose);
        let [clientP,] = this.transform(msg.op, composed);

        apply(clientP);

        this.sendAll(clientP);
    }

}
