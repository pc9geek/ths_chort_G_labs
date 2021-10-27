// DATA - Keith
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

const vectorA = [[0], [2], [4]];
const scalarA = 4;
// END DATA

function showresult(matrix) {
  matrix.forEach((row) => {
    console.log(`|${row.join("|")}|`);
  });
}

// Comletethe following

function matrixAddKeith(matrix1, matrix2) {
  result = matrix1;
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}

function matrixSubtractKeith(matrix1, matrix2) {
  result = matrix1;
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      result[i][j] = matrix1[i][j] - matrix2[i][j];
    }
  }
  return result;
}

function matrixScalarMultiplyKeith(matrix, scalar) {
  result = matrix;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[i][j] = matrix[i][j] * scalar;
    }
  }
  return result;
}

console.log("\n" + "Matrix Add");
showresult(matrixAddKeith(matrixA, matrixB));
console.log("\n" + "Matrix Subtract");
showresult(matrixSubtractKeith(matrixA, matrixB));
console.log("\n" + "Matrix Scalar");
showresult(matrixScalarMultiplyKeith(matrixA, scalarA));
