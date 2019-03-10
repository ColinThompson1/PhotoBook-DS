import {OpInsertL, OpDeleteL} from '../ot/operation';
import * as transformations from '../ot/tranformations';

describe("transformations of lists", () => {

   describe("transformInsInsL", () => {

       it('should produce equal results using transformed functions', () => {
        let context1 = 'acd'.split('');
        let context2 = 'acd'.split('');

        

        
        let opIns1 = new OpDeleteL('2', 'a', '0');
        let opIns2 = new OpDeleteL('1', 'b', '1');

        console.log(opIns1.position);
        console.log(opIns2.position);


           let [opIns1P, opIns2P] = transformations.transform(opIns1, opIns2);
           console.log(opIns1P.position);
           console.log(opIns2P.position);

           let [opIns3P, opIns4P] = transformations.transform(opIns2, opIns1);
           console.log(opIns3P.position);
           console.log(opIns4P.position);

           let res1 = opIns3P.apply(opIns4P.apply(context1));
           let res2 = opIns1P.apply(opIns2P.apply(context2));
           
           console.log(res1);
           console.log(res2);

           expect(res1).toEqual(res2);

       })
   });

});