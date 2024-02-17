/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let temp = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] >= "a" && str[i] <= "z") {
      temp += str[i];
    }
  }

  console.log(temp);

  return temp === temp.split("").reverse().join("");
}

let res = isPalindrome("A man, a plan, a canal. Panama");
console.log(res);

module.exports = isPalindrome;
