const isIncluded = require("./include");

function thatIsUsed(flag) {
  if (flag && isIncluded) {
    return 1;
  }

  return 0;
}

module.exports = thatIsUsed;
