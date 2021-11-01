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

class Encryption {
  constructor(message) {
    (this.message = message),
      (this.alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"),
      (this.cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm");
  }
  rot13Encode() {
    return this.message.replace(
      /[a-z]/gi,
      (elem) => this.cipher[this.alpha.indexOf(elem)]
    );
  }
  rot13Decode(coded) {
    return coded.replace(
      /[a-z]/gi,
      (elem) => this.alpha[this.cipher.indexOf(elem)]
    );
  }
  reverseTheString() {
    return this.message.split("").reverse().join("");
  }
  allCapitals() {
    return this.message.toUpperCase();
  }
  allLowerCase() {
    return this.message.toLowerCase();
  }
  firstLetterUpperCase() {
    let newStr = this.message.replace(/\n/g, " ");
    let returnStr = newStr.toLowerCase().split(" ");
    for (var i = 0; i < returnStr.length; i++) {
      returnStr[i] =
        returnStr[i].charAt(0).toUpperCase() + returnStr[i].slice(1);
    }
    return returnStr.join(" ");
  }
  sentenceCase() {
    return this.message.charAt(0).toUpperCase() + this.message.slice(1);
  }
}

let n = new Encryption(
  "Do not go gentle into that good night,\n\
Old age should burn and rave at close of day;\n\
Rage, rage against the dying of the light.\n\
\n\
Though wise men at their end know dark is right,\n\
Because their words had forked no lightning they\n\
Do not go gentle into that good night.\n\
\n\
Good men, the last wave by, crying how bright\n\
Their frail deeds might have danced in a green bay,\n\
Rage, rage against the dying of the light."
);

console.log(n);
let coded = n.rot13Encode();
console.log(coded);
console.log("-------------------" + "\n");
let decoded = n.rot13Decode(coded);
console.log(decoded);
console.log("-------------------" + "\n");
let reverse = n.reverseTheString();
console.log(reverse);
console.log("-------------------" + "\n");
let upper = n.allCapitals();
console.log(upper);
console.log("-------------------" + "\n");
let lower = n.allLowerCase();
console.log(lower);
console.log("-------------------" + "\n");
let firstUp = n.firstLetterUpperCase();
console.log(firstUp);
console.log("-------------------" + "\n");
let sentence = n.sentenceCase();
console.log(sentence);
console.log("\n");
