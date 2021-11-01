class encryption {
  constructor(string) {
    this.string = string;
  }
  ROT13encode() {
    let text = this.string;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      for (let j = 0; j < alphabet.length; j++) {
        if (char == alphabet[j]) {
          char = cipher[j];
          j = alphabet.length;
        }
      }
      result += char;
    }
    return result;
  }
  ROT13decode() {
    let text = this.string;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      for (let j = 0; j < cipher.length; j++) {
        if (char == cipher[j]) {
          char = alphabet[j];
          j = cipher.length;
        }
      }
      result += char;
    }
    return result;
  }
  reverse() {
    return this.string.split("").reverse().join("");
  }
  allCapitals() {
    return this.string.toUpperCase();
  }
  allLowerCase() {
    return this.string.toLowerCase();
  }
  capitalInitials() {
    let text = this.string;
    let splitstr = text.split(" ");
    for (let i = 0; i < splitstr.length; i++) {
      splitstr[i].charAt(0).toUpperCase();
    }
    text = splitstr.join(" ");
    return text;
  }
  sentenceCase() {
    let text = this.string;
    let str1 = text.charAt(0).toUpperCase;
    let str2 = text.slice(1);
    text = str1.concat(str2);
    return text;
  }
}
