const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let a = email.split("").reverse().join("").indexOf("@");
  return email.slice(email.length - a, email.length);
}

module.exports = {
  getEmailDomain,
};
