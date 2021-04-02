// function canYouSpotTheProblem() {
//   "use strict";
//   for (let counter = 0; counter < 10; counter++) {
//     console.log("happy");
//   }
// }

// canYouSpotTheProblem();
// "use strict";
// function Person(name) {this.name = name}
// let ferdinand  = Person("Ferdinand");
// // console.log(name);

function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);

  return sign + result;
}

console.log(numberToString(13, 10));
