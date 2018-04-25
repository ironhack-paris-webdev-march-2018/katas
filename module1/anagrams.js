// Kata URL:
// https://www.codewars.com/kata/number-of-anagrams-in-an-array-of-words

function anagramCounter (wordsArray) {
  var anagramCount =
    wordsArray.reduce(function (count, thisWord, index) {
      var restOfWords = wordsArray.slice(index + 1);
      var anagramsForThisWord =
        restOfWords.filter(function (oneWord) {
          return isAnagram(thisWord, oneWord);
        });
      return count + anagramsForThisWord.length;
    }, 0);

  return anagramCount;
}

function isAnagram (wordA, wordB) {
  var lettersA = [...wordA];
  var lettersB = [...wordB];

  lettersA.sort();
  lettersB.sort();

  return lettersA.join('') === lettersB.join('');
}
