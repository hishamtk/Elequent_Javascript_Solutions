for (let count = 1; count <= 7; count++) {
  let num = count;
  let str = "";
  do {
    str += "#";
    num--;
  } while (num > 0);
  console.log(str);
}
