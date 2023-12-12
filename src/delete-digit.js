const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nNew = n.toString();
  let res = 0;
  let str;
  for (let i = 0; i < nNew.length; i++) {
    str = nNew.replace(nNew[i], "");
    res = Math.max(res, +str);
  }
  return res;
}

module.exports = {
  deleteDigit,
};
