const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let matrixNew = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixNew = matrixNew.concat(matrix[i]);
  }
  console.log(matrixNew);
  let Number = 0;
  while (matrixNew.indexOf("^^") !== -1) {
    matrixNew.splice(matrixNew.indexOf("^^"), 1);
    Number = Number + 1;
    console.log(Number);
  }
  return Number;
}

module.exports = {
  countCats,
};
