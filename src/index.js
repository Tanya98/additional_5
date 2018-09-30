module.exports = function check(str, bracketsConfig) {
  if (str.length <= 1) {
    return false;
  }
  let br;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    br = str[i];

    if (bracketsConfig.indexOf(br)) {
      stack.push(br);
    }

    if (stack.length === 0 || !bracketsConfig.indexOf(br)) {
      return false;
    }

    else {
      return true;
    }

  }
}
