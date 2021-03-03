// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.

function isEven(n) {
  if (n == 0) {
    return "even";
  } else if (n == 1) {
    return "odd";
  } else if (n > 1) {
    return isEven(n - 2);
  } else {
    return "Enter a positive number";
  }
}

console.log(isEven(50));
console.log(isEven(75));

console.log(isEven(34));
console.log(isEven(-1));
