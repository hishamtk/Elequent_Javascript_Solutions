let size = 8
let c1, c2;

for (let i = 1; i <= size; i++) {
  if (i % 2 == 0) {
    flag = 0; //for even heights
    c1 = "#";
    c2 = " ";
  } else {
    flag = 1; // for odd heights
    c1 = " ";
    c2 = "#";
  }
  let str = "";
  for (let j = 1; j <= size; j += 2) {
    str += c1;
    str += c2;
  }
  console.log(str);
}




