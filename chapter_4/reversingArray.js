function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}
var arr1 = [2, 3, 4, 5, 6];

console.log(arr1);

function reverseInArray(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;

    low++;
    high--;
  }
}

reverseInArray(arr1);
console.log(arr1);
