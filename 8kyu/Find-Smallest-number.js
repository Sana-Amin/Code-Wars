// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that 
// the supplied array will not be empty.

function smallestNumber(array){
    let smallestNumberInArray = array[0];

    for(let i = 0; i < array.length; i++){
        if(smallestNumberInArray > array[i]){
          smallestNumberInArray = array[i];
        }
        
    } 
    return smallestNumberInArray 
}

console.log(smallestNumber([3, 4, -6, 5]))

class SmallestIntegerFinder{
    findSmallestInt(args){
      
      let smallestNumberInArray = args[0];
  
      for(let i = 0; i < args.length; i++){
          if(smallestNumberInArray > args[i]){
            smallestNumberInArray = args[i];
          }      
      } 
      return smallestNumberInArray 
    }
  }

  //Other solutions 
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
  //The Math.min() function returns the smallest of the numbers given as input parameters, 
  //or Infinity if there are no parameters.
//   The spread (...) syntax allows an iterable, such as an array or string, 
//   to be expanded in places where zero or more arguments (for function calls)
//    or elements (for array literals) are expected. 

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b) {
      return a - b; } )
      return args[0];
    }
  }

  