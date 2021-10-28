/*
 Please solve the following problems:
*/
///////////////////////////////////////////////////////////////
// Given an array of integers, find the sum of its elements.
///////////////////////////////////////////////////////////////
let data=[1,2,3,4,10,11];   // should result in 31
function simpleArraySum(){
    // TODO
}
let result=simpleArraySum(data);
console.log(result);

///////////////////////////////////////////////////////////////
// Given an array of names return an array sorted alphabetically
///////////////////////////////////////////////////////////////
let names=["Steven","Himanshu", "Elo","Keith","Saikran","Sahej"];

function sortAlphabetically(arr){
    // TODO
}
console.log(sortAlphabetically(names));

//////////////////////////////////////////////////////////////
//Encode the following passage of text with  ROT13 Encryption
//////////////////////////////////////////////////////////////
let message="Do not go gentle into that good night,\n\
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

function ROT13encode(text){
    //TODO
    return text;
}

function ROT13decode(text){
    //TODO
    return text;
}

console.log(ROT13(message));
