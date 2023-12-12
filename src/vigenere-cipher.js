const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(set = true) {
    this.set = set;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt(mess, val) {
    if (!val || !mess) {
      throw new Error("Incorrect arguments!");
    }

    mess = mess.toUpperCase();
    val = val.toUpperCase();
    let result = "";
    let index = 0;

    for (let i = 0; i < mess.length; i++) {
      if (!this.alphabet.includes(mess[i])) {
        result += mess[i];
        continue;
      }
      result =
        result +
        this.alphabet[
          (this.alphabet.indexOf(mess[i]) +
            this.alphabet.indexOf(val[index++ % val.length])) %
            this.alphabet.length
        ];
    }
    return this.set ? result : result.split("").reverse().join("");
  }

  decrypt(mess, val) {
    if (!val || !mess) {
      throw new Error("Incorrect arguments!");
    }

    mess = mess.toUpperCase();
    val = val.toUpperCase();
    let result = "";
    let index = 0;

    for (let i = 0; i < mess.length; i++) {
      if (!this.alphabet.includes(mess[i])) {
        result = result + mess[i];
        continue;
      }

      let decr =
        this.alphabet.indexOf(mess[i]) -
        (this.alphabet.indexOf(val[index++ % val.length]) %
          this.alphabet.length);

      if (decr >= 0) {
        result = result + this.alphabet[decr];
      } else {
        result = result + this.alphabet[this.alphabet.length + decr];
      }
    }
    return this.set ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
