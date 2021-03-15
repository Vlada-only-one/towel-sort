
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    for (k = 1; k < matrix.length; k = k + 2) {
        matrix[k] = matrix[k].reverse();
    }
    return matrix.flat()
}
