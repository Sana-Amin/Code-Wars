//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//My solution: 
function evenOrOdd(number) {
    if(number % 2==0){
      return "Even";
    }
    else{
      return "Odd"
    }
  }
  
  evenOrOdd(7)

//Best solution:
  const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

// A ternary operator evaluates a condition and executes a block of code based on the condition.

// Its syntax is: condition ? expression1 : expression2
// The ternary operator evaluates the test condition.

// If the condition is true, expression1 is executed.
// If the condition is false, expression2 is executed.
