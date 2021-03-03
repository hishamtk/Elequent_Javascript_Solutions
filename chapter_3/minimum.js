// Quest. Write a function min that takes two arguments and returns their minimum.

let a = 45;
let b = 30;



const minimum = (p, q) => {
  if (p > q) {
    return q;
  } else {
    return p;
  }
};

console.log(minimum(a, b));
