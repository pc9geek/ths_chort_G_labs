
// DATA
const matrixA =[
        [0, 1], 
        [2, 3], 
        [4, -5]
    ];
const matrixB = [
        [1, -1],
        [-2, 4], 
        [-7, 4]
    ];

const vectorA = [
    [0],
    [2],
    [4]
]
 const scalarA=4;
// END DATA


function showresult(matrix){
    matrix.forEach((row)=>{        
        console.log(`|${row.join("|")}|`);
    })
}

// Comletethe following

function matrixAdd(matrix1,matrix2){
    result=[];
    // TODO
    return matrix1;
}

function matrixSubtract(matrix1,matrix2){
    result=[];
    // TODO
    return matrix1;
}

function matrixScalarMultiply(matrix1,scalar){
    result=[];
    //TODO
    return matrix1;
}

console.log("changed file on master");
showresult(matrixAdd(matrixA,matrixB));
showresult(matrixSubtract(matrixA,matrixB));
showresult(matrixScalarMultiply(matrixA,matrixB));
