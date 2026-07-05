// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.



function swipe(a, b) {
  [a,b] = [b,a]
    return {a,b}
}
const a = 5;
const b = 10;
// console.log(swipe(a ,b));


// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.


function isEven(n) {
    
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}
// console.log(isEven(6));
