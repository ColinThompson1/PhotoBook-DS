import {OTController} from "./ot_controller";

export class OTControllerServer extends OTController {

    constructor(messagingService) {
        super();
        this.applied = {};
        // this.outgoing = null;
        // this.pending = [];
        this.messagingService = messagingService;
    }


    sendAll(op) {

    }

    recieve(msg) {
        let newOps = this.applied.splice(msg.lastKnownState + 1);
        let composed = newOps.reduce(this.compose);
        let [clientP, serverP] = this.transform(msg.op, composed);
        //apply it
        apply(clientP);

        this.sendAll(clientP);
    }



}
