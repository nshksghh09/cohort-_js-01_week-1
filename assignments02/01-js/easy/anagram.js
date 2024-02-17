/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let len_str1 = str1.length,
    len_str2 = str2.length;
  if (len_str1 !== len_str2) return false;

  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");

  if (str1 === str2) return true;
  return false;
}

module.exports = isAnagram;
