# Unexpected Behavior of Subtraction with NaN and Infinity in JavaScript

This repository demonstrates the unexpected behavior of the subtraction operator (-) in JavaScript when handling special numeric values like NaN (Not a Number) and Infinity.

## Bug Description
The subtraction operator in JavaScript can produce unexpected results when one or both operands are NaN or Infinity.  This can lead to difficult-to-debug errors in applications that perform numerical calculations.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the JavaScript code using a Node.js environment or a web browser's console.
4. Observe the output, paying close attention to results involving NaN and Infinity.

## Solution
The solution involves careful handling of potential NaN and Infinity values before performing subtraction.  This can include input validation, error handling, or using conditional statements to avoid problematic calculations.  See `bugSolution.js` for an example.