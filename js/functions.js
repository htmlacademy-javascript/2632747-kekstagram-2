/**
 * Checks if string length is less than given length
 * @param {string} string
 * @param {number} length
 * @returns {boolean}
 */

const checkStringLength = (string, length) => string.length < length;
/*
tests:
console.log(checkStringLength("Hello", 3)); // false
console.log(checkStringLength("Hello", 10)); // true
*/

/**
 * Checks if given string is a palindrome
 * @param {string} string
 * @returns {boolean}
 */
const isPalindrome = (string) =>
  string.toLowerCase().replaceAll(" ", "") ===
  string.toLowerCase().replaceAll(" ", "").split("").reverse().join("");

/*
tests:
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Аргентина манит негра")); // true
console.log(isPalindrome("Я иду с мечем судия")); // true
console.log(isPalindrome("Лёша на полке клопа нашёл")); // true
*/

/**
 * Extracts numbers from string
 * @param {*} string
 * @returns {number}
 */
const getNumbersFromString = (string) => {
  let numbers = "0123456789".split("");
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) {
      result += string[i];
    }
  }
  if (result === "") {
    return NaN;
  }
  return parseInt(result);
};
/*
tests:
console.log(getNumbersFromString("Hello")); // NaN
console.log(getNumbersFromString("Hello 123")); // 123
console.log(getNumbersFromString("123 Hello")); // 123
console.log(getNumbersFromString("Hello 123 World 456")); // 123456
*/
