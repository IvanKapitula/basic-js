const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainNode: [],
  getLength() {
    return this.chainNode.length;
  },
  removeLink(position) {
    if (!this.chainNode[position - 1]) {
      this.chainNode = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainNode.splice(position - 1, 1);
      return this;
    }
  },
  addLink(value) {
    this.chainNode.push(`( ${value} )`);
    return this;
  },
  finishChain() {
    let result = this.chainNode.join("~~");
    this.chainNode = [];
    return result;
  },
  reverseChain() {
    this.chainNode.reverse();
    return this;
  },
};

module.exports = {
  chainMaker,
};
