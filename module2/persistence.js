// Kata URL:
// https://www.codewars.com/kata/persistent-bugger

function persistence (num) {
  let strNum = String(num);
  let persistence = 0;

  while (strNum.length !== 1) {
    num = multiplyDigits(strNum);
    strNum = String(num);
    persistence += 1;
  }

  return persistence;
}

function multiplyDigits (strNum) {
  const digits = [...strNum];
  const result =
    digits.reduce((mult, oneDigit) => {
      return mult * oneDigit;
    }, 1);

  return result;
}
