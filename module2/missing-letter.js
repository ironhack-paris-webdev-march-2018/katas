// Kata URL:
// https://www.codewars.com/kata/find-the-missing-letter

function findMissingLetter (array) {
  const allButLast = array.slice(0, -1);

  const prevLetter =
    allButLast.find((oneLetter, index) => {
      const currentCode = oneLetter.charCodeAt(0);
      const nextCode = array[index + 1].charCodeAt(0);
      return nextCode !== currentCode + 1;
    });

  const prevCode = prevLetter.charCodeAt(0);
  return String.fromCharCode(prevCode + 1);
}
