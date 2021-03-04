function range(start, end, step = start < end ? 1 : -1) {
  let arr = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else {
    
    for (let i = start; i >= end; i += step) arr.push(i);
  }
  return arr;
}

function sum(arr) {
  let sum = 0;
  for (element of arr) {
    sum += element;
  }
  return sum;
}

console.log(range(5, 2, -1));
