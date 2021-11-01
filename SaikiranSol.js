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

function sentenceCase(str) {
  for (let i = 0; i < str.length; i++) {}
  return str;
}
console.log(
  sentenceCase(
    "Good men, the last wave by, crying how bright\n\
    Their frail deeds might have danced in a green bay,\n\
    Rage, rage against the dying of the light"
  )
);
