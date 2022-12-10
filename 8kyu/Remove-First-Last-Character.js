// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first 
// and last characters of a string. You're given one parameter, the original string. You don't have to worry 
// with strings with less than two characters.


//My Solution 
function removeChar(str){
    let removed = str.slice(1, str.length-1 )  
       return removed
    }
   console.log(removeChar("amisn"))

   //Other Solutions
   function removeChar(str) {
    return str.slice(1, -1);
  }
  //The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

  function removeChar(str){
    //You got this!
     var input_str = str;
     var output_str = '';
     
     for (var i = 1; i < input_str.length-1; i++) {
       output_str += input_str[i];
     }
   
     return output_str;
   };
