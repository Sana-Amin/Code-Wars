// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My Solution: 

function positiveSum(arr) {
    let sum = 0;
 for(let i = 0; i <= arr.length; i++)
  if(arr[i]> 0){
    sum += arr[i];
  }
  return sum
 }
  
console.log(positiveSum([0]))

//Other solutions: 
function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }

  //The reducer walks through the array element-by-element, 
  //at each step adding the current array value to the result from the previous step 
  //(this result is the running sum of all the previous steps) — until there are no more elements to add.

