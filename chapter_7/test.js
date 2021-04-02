let board = [
  [1, 3, 2, 5, 7, 9, 4, 6, 8],
  [4, 9, 8, 2, 6, 0, 3, 7, 5],
  [7, 0, 6, 3, 8, 0, 2, 1, 9],
  [6, 4, 3, 1, 5, 0, 7, 9, 2],
  [5, 2, 1, 7, 9, 0, 8, 4, 6],
  [9, 8, 0, 4, 2, 6, 5, 3, 1],
  [2, 1, 4, 9, 3, 5, 6, 8, 7],
  [3, 6, 0, 8, 1, 7, 9, 2, 4],
  [8, 7, 0, 6, 4, 2, 1, 3, 5],
];

// let board = [ [ 1, 3, 2, 5, 7, 9, 4, 6, 8 ],
// [ 4, 9, 8, 2, 6, 1, 3, 7, 5 ],
// [ 7, 5, 6, 3, 8, 4, 2, 1, 9 ],
// [ 6, 4, 3, 1, 5, 8, 7, 9, 2 ],
// [ 5, 2, 1, 7, 9, 3, 8, 4, 6 ],
// [ 9, 8, 7, 4, 3, 6, 5, 2, 1 ],
// [ 2, 1, 4, 9, 3, 5, 6, 8, 7 ],
// [ 3, 6, 5, 8, 1, 7, 9, 2, 4 ],
// [ 8, 7, 9, 6, 4, 2, 1, 3, 5 ] ]
console.log(doneOrNot(board));
function doneOrNot(rows) {
  var columns = [],
    blocks = [];

  for (var i = 0; i < 9; i++) {
    columns[i] = [];

    for (var j = 0; j < 9; j++) {
      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      blocks[k] = blocks[k] || [];

      blocks[k].push(rows[i][j]);
      columns[i].push(rows[j][i]);
    }
  }
console.log(blocks);
  var is_valid_row = (row) =>
    row
      .slice("")
      .sort((a, b) => a - b)
      .join("") == "123456789";

  var is_valid =
    rows.every(is_valid_row) &&
    columns.every(is_valid_row) &&
    blocks.every(is_valid_row);

  return is_valid ? "Finished!" : "Try again!";
}
