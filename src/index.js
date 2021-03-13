module.exports = function check(str, bracketsConfig) {
  // your solution
      let res = true;
  let examples = {
    "[": "]",
    "(": ")",
    "{": "}",
    "|": "|",
  };

  let proofOf = 0,
    errors = 0;

  const myMap = new Map();
  for (let brack of bracketsConfig) {
    myMap.set(brack[0], brack[1]);
  }

  let openBrack = 0,
    closeBrack = 0;
  let strangeBracket = true;
  str.length % 2 == 0 ? (res = true) : (res = false);

  for (let brackets of bracketsConfig) {
    brackets.includes(str[0]) && brackets.includes(str[str.length - 1])
      ? proofOf++
      : (proofOf += 0);
  }

  proofOf > 0 ? (res = true) : (res = false);

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter == "|") {
      if (strangeBracket == true) {
        openBrack += 1;
        strangeBracket = false;
      } else {
        closeBrack += 1;
        strangeBracket = true;
      }
    } else {
      if (myMap.get(letter)) {
        openBrack += 1;
      } else {
        if (openBrack > closeBrack) {
          closeBrack += 1;
        } else {
          // console.log("op");

          res = false;
          //break;
        }
      }
    }
    //examples[letter] ? (openBrack += 1) : (closeBrack += 1);
  }

  // console.log(openBrack);
  // console.log(closeBrack);
  // //openBrack == closeBrack ? (res = true) : (res = false);

  // myMap.forEach(function (value, key) {
  //   console.log(`${key}: ${value}`);
  // });

  // console.log(str[0]);
  // console.log(str[str.length - 1]);
  console.log(errors);
  return res;
}
