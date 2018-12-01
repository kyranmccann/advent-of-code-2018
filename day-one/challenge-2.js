const inputArrayWithOp = require('../myinput.js').inputArrayWithOp;

const duplicateFrequency = arr => {
  let result = 0;
  let resultArr = [];
  let found = null;

  const loop = arr => {
    for (let i = 0; i < arr.length; i++) {
      let change = arr[i];
      let currentOp = change.substring(0,1);
      let currentNum = parseInt(change.substring(1));
      if (currentOp === "+") {
        result += currentNum;
        if (resultArr.indexOf(result) !== -1) {
          found = result;
          break;
        }
        resultArr.push(result);
      } else {
        result -= currentNum;
        if (resultArr.indexOf(result) !== -1) {
          found = result;
          break;
        }
        resultArr.push(result);
      }
    }
  }

  while (!found) {
    loop(arr);
  }

  return found;
}

duplicateFrequency(inputArrayWithOp); //returns 65474
