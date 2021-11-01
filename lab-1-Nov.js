/*
    In this lab you are to
    pull ths repository and 
    create a branch using your name for the branch (eg: steve)
    change to that branch
    You are to create a new file for your solutions (eg steve-solution.js)
      In your file 

      Create a class called encryption

      add methods for
         ROT13 encode
         ROT13 decode
         Reversing The string
         All Captitals
         All Lowercase
         First letter Uppercase
         Sentence case

    write a series of tests to demonstrate your success

    Push your branch    

*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello World"));

function upperCase(str) {
  return str.toUpperCase();
}
console.log(upperCase("hello world"));

function lowerCase(str) {
  return str.toLowerCase();
}
console.log(lowerCase("HELLO WORLD"));
