
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) { //if both are same,return any one
    return fromN;
  }
  return sum(fromN, toN - 1) + toN;
}

module.exports = sum;

//for my understanding
// sum(0, 0) = 0 + 0
// sum(0, 1) = 0 + 1 = fromN + toN
// sum(0, 2) = 0 + 1 + 2 = fromN + (toN-1) + toN --> modify this as sum(0, 1) + 2
// sum(0, 3) = 0 + 1 + 2 + 3  --> modify this as sum(0, 2) + 3
//           = sum(fromN, toN - 1) + toN  
