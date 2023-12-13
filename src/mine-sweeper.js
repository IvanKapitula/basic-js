const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  let cols = matrix[0].length;
  let rows = matrix.length;

  for (let gLine = 0; gLine < rows; gLine++) {
    const newgLine = [];

    for (let vLine = 0; vLine < cols; vLine++) {
      let number = 0;

      for (let i = gLine - 1; i <= gLine + 1; i++) {
        for (let j = vLine - 1; j <= vLine + 1; j++) {
          if (
            !(i === gLine && j === vLine) &&
            j < cols &&
            i < rows &&
            j >= 0 &&
            i >= 0
          ) {
            if (matrix[i][j]) {
              number += 1;
            } else {
              number += 0;
            }
          }
        }
      }

      newgLine.push(number);
    }

    result.push(newgLine);
  }

  return result;
}

module.exports = {
  minesweeper,
};
