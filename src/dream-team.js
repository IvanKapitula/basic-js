const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let name = [];
    let newMembers = [];

    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        newMembers[i] = members[i].trim();
      }
    }
    for (let i = 0; i < newMembers.length; i++) {
      if (typeof newMembers[i] === "string") {
        name[i] = newMembers[i][0].toUpperCase();
      } else {
      }
    }
    return name.sort().join("");
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
