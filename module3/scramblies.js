// Kata URL:
// https://www.codewars.com/kata/scramblies/

function scramble (str1, str2) {
  // These objects will count all characters in each string
  // For a string like "ababca" we will get { a: 3, b: 2, c: 1 }
  const str1Chars = {};
  const str2Chars = {};

  // Only one loop for better performance
  // With a "for" loop we can use the index to scan both strings
  const biggest = Math.max(str1.length, str2.length);
  for (let i = 0; i < biggest; i += 1) {
    const char1 = str1[i];
    const char2 = str2[i];

    increment(char1, str1Chars);
    increment(char2, str2Chars);
  }

  for (let char of Object.keys(str2Chars)) {
    if (!str1Chars[char] || str1Chars[char] < str2Chars[char]) {
      // return false if a character we found in str2 is NOT present in str1
      return false;
    }
  }

  // return true if there are enough of all the characters
  return true;
}

function increment(char, object) {
  if (!char) {
    return;
  }

  if (!object[char]) {
    object[char] = 0;
  }

  object[char] += 1;
}
