const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  strNew = str.split("");
  result = "";
  let num = 1;
  for (let i = 0; i < strNew.length; i++) {
    if (strNew[i] === strNew[i + 1]) {
      num++;
    } else {
      if (num === 1) {
        num = "";
      }
      result = result + `${num}${strNew[i]}`;
      num = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
