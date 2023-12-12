const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.separator) {
    options.separator = "+";
  } else {
    options.separator = String(options.separator);
  }

  if (options.addition === undefined) {
    options.addition = "";
  } else {
    options.addition = String(options.addition);
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  } else {
    options.additionSeparator = String(options.additionSeparator);
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  if (str !== "string") {
    str = String(str);
  }

  let plus = (options.addition + options.additionSeparator).repeat(
    options.additionRepeatTimes
  );

  plus = plus.slice(0, plus.length - options.additionSeparator.length);

  let strMod = (str + plus + options.separator).repeat(options.repeatTimes);

  strMod = strMod.slice(0, strMod.length - options.separator.length);

  return strMod;
}

module.exports = {
  repeater,
};
