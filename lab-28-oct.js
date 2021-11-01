
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


}
let codedMessage=ROT13encode(message);
console.log(codedMessage);
let decodedMessage=ROT13decode(codedMessage);
console.log(decodedMessage);

