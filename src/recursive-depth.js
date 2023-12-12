const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let maximum = 0;
    for (let key of array) {
      if (Array.isArray(key)) {
        maximum = Math.max(maximum, this.calculateDepth(key));
      }
    }
    return maximum + 1;
  }
}

module.exports = {
  DepthCalculator,
};
