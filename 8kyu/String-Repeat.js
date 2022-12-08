// DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//My solution
function repeatStr (n, s) {
    let newStr = '';
    for(let i = 0; i < n; i++){
      newStr += s
    }
    return newStr
  }

  console.log(repeatStr(3, "*"))

//Other Solutions 
const repeatStr = (n,s) => s.repeat(n);

//repeat() function
//syntax: string.repeat(count)

// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.