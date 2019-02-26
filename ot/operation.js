
export class Operation {

    id;
    type;

    constructor(id, name) {
        this.id = id;
        this.type = name;
    }

}

export class OpInsertL extends Operation {

    item;
    position;

    constructor(id, item, position) {
        super();
        super.id = id;
        super.type = 'insertL';
        this.item = item;
        this.position = position;
    }

    apply(context) {
        context.splice(this.position, 0, this.item);
        return context;
    }

}

export class OpDeleteL extends Operation {

    position;

    constructor(id, item, position) {
        super();
        super.id = id;
        super.type = 'deleteL';
        this.position = position;
    }

    apply(context) {
        context.splice(this.position, this.position);
        return context
    }

}

export class NoOp extends Operation {

    constructor(id) {
        super();
        super.id = id;
        super.type = 'nop';
    }

}

