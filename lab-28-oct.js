//////////////////////////////////////////////////////////////
//Encode the following passage of text with  ROT13 Encryption
//////////////////////////////////////////////////////////////
let message =
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
Rage, rage against the dying of the light.";

// loop through the message.  Find the first character
//  search the alpha array to find the index position of the character
//  find the character in the index position of the cipher array
//  push the cipher character to a new array

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

function ROT13encode(msg, alpha, cip) {
  return msg.replace(/[a-z]/gi, (elem) => cip[alpha.indexOf(elem)]);
}

function ROT13decode(msg, alpha, cip) {
  //TODO
  return msg.replace(/[a-z]/gi, (elem) => alpha[cip.indexOf(elem)]);
}

let resultCoded = ROT13encode(message, alphabet, cipher);
console.log(resultCoded);
console.log("---------------------------" + "\n");
let resultDecoded = ROT13decode(resultCoded, alphabet, cipher);
console.log(resultDecoded);
