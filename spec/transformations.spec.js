
import {OpInsertL} from "../ot/operation";
import * as transformations from '../ot/tranformations';

describe("transformations of lists", () => {

   describe("transformInsInsL", () => {

       it('should produce equal results using transformed functions', () => {
           let context1 = 'acd'.split('');
           let context2 = 'acd'.split('');


           let opIns1 = new OpInsertL('1', 'b', '1');
           let opIns2 = new OpInsertL('2', 'e', '3');

           let [opIns1P, opIns2P] = transformations.transformInsInsL(opIns1, opIns2);

           let res1 = opIns2P.apply(opIns1.apply(context1));
           let res2 = opIns1P.apply(opIns2.apply(context2));

           expect(res1).toEqual(res2);

       })
   });

});