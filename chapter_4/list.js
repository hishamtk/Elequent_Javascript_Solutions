var numbers = [10,20,23];

// My function but it's getting null when feed to listToArray()
// it's printing { value: 10, rest: { value: 20, rest: { value: 23, rest: null } } }
// for above input but no luck.


// function arrayToList(arr) {
//   if (arr.length == 0) {
//     return null;
//   }
//   let num = arr.shift();
//   return { value: num, rest: arrayToList(arr) };
// }

function listToArray(list) {
  let arr = [];
  for (let t = list; t; t = t.rest) {
    arr.push(t.value);
  }
  return arr;
}

console.log(arrayToList(numbers));
console.log(listToArray(arrayToList(numbers)));
