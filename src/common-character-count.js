const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1New = s1.split("");
  let s2New = s2.split("");
  let res = 0;
  if (s2New.length >= s1New.length) {
    for (let i = 0; i < s1New.length; i++) {
      if (s2New.indexOf(s1[i]) !== -1) {
        s2New.splice(s2New.indexOf(s1[i]), 1);
        res = res + 1;
      }
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
