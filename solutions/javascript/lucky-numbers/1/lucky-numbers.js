// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstNumber = 0;
  let secondNumber = 0;
  let result1 = '';
  let result2 = '';
  
  for(let num of array1){
    let data = String(num)
    result1 += data
  }
  for(let num of array2){
    let data = String(num)
    result2 += data
  }

  firstNumber = Number(result1);
  secondNumber = Number(result2);
  return firstNumber + secondNumber;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let data = String(value);
  let d = '';
  for (let i of data) {
    d += i;
  }
  d = d.split("").reverse().join("");
  if (value === Number(d)) return true
  return false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(Boolean(input) === false) return 'Required field'
  if(Number(input) > 0) return ''
  return 'Must be a number besides 0'
}
