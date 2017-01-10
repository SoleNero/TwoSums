
'use strict';


function plusOneSum (arr) {
    let sum=[];
    for (var i = 0; i < arr.length; i++) {
      sum.push(arr[i] + 1);
      }
      let result = sum.reduce(function(a, b) {
        return a + b;
      },0);
      return result;
  }
  plusOneSum([1, 2, 3, 4]);


module.export = plusOneSum;
