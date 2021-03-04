// need to come back here not fully understand.

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || typeof a != "object" || typeof b != "object" || b == null)
    return false;

  let keyA = Object.keys(a);
  let keyB = Object.keys(b);
  if (keyA.length != keyB.length) {
    return false;
  }

  for (let key of keyA) {
    if (!keyB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true