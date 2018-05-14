// Kata URL:
// https://www.codewars.com/kata/all-that-is-open-must-be-closed-dot-dot-dot

function isBalanced (str, pairs) {
  const openCharacters = [];

  for (let char of str) {
    if (!pairs.includes(char)) {
      // skip to the next character if we don't care about this one
      continue;
    }

    const lastOpen = openCharacters[openCharacters.length - 1];
    const nextClose = pairs[pairs.indexOf(lastOpen) + 1];

    if (lastOpen && char === nextClose) {
      // remove the last opening character if this character closes it
      openCharacters.pop();
      continue;
    }

    const pairIndex = pairs.indexOf(char);
    if (pairIndex % 2 === 0) {
      // add the character to our stack if it's a new opening character
      openCharacters.push(char);
      continue;
    }

    // return false if this is a closing character without its opening
    return false;
  }

  // length will be 0 if nothing was left unclosed
  return openCharacters.length === 0;
}
