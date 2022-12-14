// DESCRIPTION:
// Summation
// Write a program that finds the summation of every number
//  from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//My Solution
var summation = function (num) {
 let sum = 0;
 for(let index = 1; index <= num; index++){
    sum += index
 }
   return sum
}
console.log(summation(8))

//Other Solution: 

const summation = n => n * (n + 1) / 2;

