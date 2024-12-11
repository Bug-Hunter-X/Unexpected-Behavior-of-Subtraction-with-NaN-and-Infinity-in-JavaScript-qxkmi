function myFunction(a, b) {
  if (isNaN(a) || isNaN(b) || a === Infinity || b === Infinity || a === -Infinity || b === -Infinity) {
    return "Error: Invalid input - NaN or Infinity detected";
  } else {
    return a - b;
  }
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3
console.log(myFunction(0, 0)); // Output: 0
console.log(myFunction(NaN, 5)); // Output: Error: Invalid input - NaN or Infinity detected
console.log(myFunction(5, NaN)); // Output: Error: Invalid input - NaN or Infinity detected
console.log(myFunction(Infinity, 5)); // Output: Error: Invalid input - NaN or Infinity detected
console.log(myFunction(5, Infinity)); // Output: Error: Invalid input - NaN or Infinity detected