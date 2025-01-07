// / addition of 2 matrix
let matrixa = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let matrixb = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]
let resultmatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        resultmatrix[i][j] += matrixa[i][j] + matrixb[i][j]
    }
}
console.log(resultmatrix);
