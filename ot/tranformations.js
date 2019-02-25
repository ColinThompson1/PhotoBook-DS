import _ from 'lodash'


//op1 = recieved operation
//op2 = local operation
function transform(op1, op2) {
    if (op1.type == "insertL" && op2.type == "insertL"){
        transformInsInsL(op1, op2);
    }else if(op1.type == "insertL" && op2.type == "deleteL"){
        transformInsDelL(op1, op2);
    }else if(op1.type == "deleteL" && op2.type == "insertL"){
        transformDelInsL(op1, op2);
    }else if(op1.type == "deleteL" && op2.type == "deleteL"){
        transformDelDelL(op1, op2);
    }
}

//CURRENTLY ONLY INCRS BY 1
//NEEDS TO INCRS BY LENGTH OF TEXT

/**
 * Transformation of two insert operations on a list
 */
function transformInsInsL(opIns1, opIns2) {

    let opIns1P = _.cloneDeep(opIns1);
    let opIns2P = _.cloneDeep(opIns2);

    if (opIns1.position <= opIns2.position) {
        opIns2P.position = opIns2.position + 1;
        return [opIns1P, opIns2P];
    } else {
        opIns1P.position = opIns1.position + 1;
        return [opIns1P, opIns2P];
    }
}

/**
 * Transformation of an insert and a delete operation on a list, respectively
 */
function transformInsDelL(opIns, opDel) {

    let opInsP = _.cloneDeep(opIns);
    let opDelP = _.cloneDeep(opDel);

    if (opIns.position <= opDel.position) {
        opDelP.position = opDel.position + 1;
        return [opInsP, opDelP];
    } else {
        opInsP.position = opIns.position - 1;
        return [opInsP, opDelP];
    }

}

/**
 * Transformation of a delete and an insert operation on a list, respectively
 */
function transformDelInsL(opDel, opIns) {

    let opDelP = _.cloneDeep(opDel);
    let opInsP = _.cloneDeep(opIns);

    if (opDel.position < opIns.position) {
        opInsP.position = opIns.position - 1;
        return [opDelP, opInsP];
    } else {
        opDelP.position = opDel.position + 1;
        return [opDelP, opInsP];
    }
}

/**
 * Transformation of two delete operations on a list
 */
function transformDelDelL(opDel1, opDel2) {
    let opDel1P = _.cloneDeep(opDel1);
    let opDel2P = _.cloneDeep(opDel2);

    if (opDel1.position < opDel2.position) {
        opDel2P.position = opDel2.position - 1;
        return [opDel1P, opDel2P];
    } else if (opDel1.position > opDel2.position) {
        opDel1P.position = opDel1.position - 1;
        return [opDel1P, opDel2P];
    } else {
        return [new NoOp(opDel1.id), new NoOp(opDel2.id)]
    }
}

module.exports = {
    transformInsInsL,
    transformInsDelL,
    transformDelInsL,
    transformDelDelL
};