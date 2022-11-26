// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//My Solution: 
function solution(str){
    let newStr = "";
      // Step 1. Create an empty string that will host the new created string
    for(let i = str.length -1; i >= 0; i--)
     newStr += str[i];
     // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
        // Step 3. Return the reversed string
     return newStr
  }

  //Other solution:
  const solution = str => str.split('').reverse().join('');

  function solutionOne(backstring){
    let n = ''
    for(let i of backstring){
// Reads each letter thats being passed in one by one 
        console.log(n)
      n = i+n
      // passing into the new string each new letter plus whatever was already in there
    }
    return n
  }

  console.log(solutionOne("ABC"))