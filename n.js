const matrixA = [
  [0, 1],
  [2, 3],
  [4, -5],
];
const matrixB = [
  [1, -1],
  [-2, 4],
  [-7, 4],
];
function matrixAddHimanshu(matrix1, matrix2) {
  let result = [];
  matrix1.forEach((row, i) => {
    let newRow = [];
    row.forEach((item, j) => {
      newRow.push(item + matrix2[i][j]);
    });
    result.push(newRow);
  });
  // TODO
  return result;
}
console.log(matrixAddHimanshu(matrixA, matrixB));
