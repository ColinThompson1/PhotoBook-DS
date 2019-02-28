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
let left = [a,b,c];
let top = [d,e,f];
    if(left === empty || top == empty)
        return[left,top];
    if (left.size() === 1 && top.size() === 1)
    {
        //call our previous function transform here
        right = transform(left.first, top.first,true);
        left_op = right;
        bottom = transform(top.first, left.first, false);
        return[Array(right),Array(bottom)]
        break;
    }
    right = [];
    bottom = []; 

    left.forEach((index) =>  {left_op});;
        bottom = [];

    top.forEach((index) => {top_op});;
        right_op,bottom_op = transformString(left_op, top_op);
        left_op = right_op;
        bottom.concat(bottom_op);
     right.concat(left_op)
     top = bottom    

    expect top = bottom;

/*

  left.each do |left_op|
    bottom = []
    
    top.each do |top_op|
      right_op, bottom_op = transform(left_op, top_op)
      left_op = right_op
      bottom.concat(bottom_op)
    end
    
    right.concat(left_op)
    top = bottom
  end

  [right, bottom]
end


//pseudo code for multi transform
/*
 * //2 lists
 * top[]  left[] 
 * right[] bottom[]
 * tansform.top() transform.left() == bottom && right
 * push bottom.bottom() // push element to bottom of list 
 * transform.newLeft(top) // where new left is the transformed left 
 * push bottom.bottom() // push element to bottom of list
 * do while(!top.empty())
 * if( end of row )
 * push newLeft.right[]
 * top[] = bottom[]
 * 
 */
// This is the multi one 
