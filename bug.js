function myFunction(a, b) {
  return a - b;
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3
console.log(myFunction(0, 0)); // Output: 0
console.log(myFunction(NaN, 5)); // Output: NaN
console.log(myFunction(5, NaN)); // Output: NaN
console.log(myFunction(Infinity, 5)); // Output: Infinity
console.log(myFunction(5, Infinity)); // Output: -Infinity