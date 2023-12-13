const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};

  domains.forEach((el) => {
    el = el.split(".");
    for (let i = 0; i < el.length; i++) {
      let property = `.${el.slice(i).reverse().join(".")}`;
      if (object.hasOwnProperty(property)) {
        object[property] += 1;
      } else {
        object[property] = 1;
      }
    }
  });

  return object;
}

module.exports = {
  getDNSStats,
};
