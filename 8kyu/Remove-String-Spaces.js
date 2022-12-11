// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

//My Solution: 
function noSpace(x){
 return x.split(' ').join('')
}

console.log(noSpace("      ny la "))

//Other Solutions: 
const noSpace = x => x.replace(/ /g, "");
// The replace() method takes two parameters, the first of 
// which is the character to be replaced and the second of 
// which is the character to replace it with.this one removes all instances 
// of the chosen character.

function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
  }