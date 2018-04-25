// Kata URL:
// https://www.codewars.com/kata/playing-with-digits

function digPow (n, p) {
  const strN = String(n);
  const digits = [...strN];

  const total =
    digits.reduce((sum, oneDigit, index) => {
      const power = Math.pow(oneDigit, p + index);
      return sum + power;
    }, 0);

  if (total % n !== 0) {
    return -1;
  }

  return total / n;
}
