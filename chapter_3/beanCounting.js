// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to
// make use of this new function.

// first version of countB
function countB(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "B") {
      count++;
    }
  }
  return count;
}

function countChar(str, c) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == c) {
      count++;
    }
  }
  return count;
}

console.log(countB("sdfsdf B sdfBBB sdfsBsdfsdfsoifjosjifB bB"));
console.log(countChar("sdfsdf B sdfBBB sdfsBsdfsdfsoifjosjifB bB", "B"));

// rewriting countB .

function countB2(str) {
  return countChar(str, "B");
}

console.log(countB2("sdfsdf B sdfBBB sdfsBsdfsdfsoifjosjifB bB"));
