const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(x) {
	let sums = 0;
  for (let i = 0; i<x.length; i++) {
    sums += x[i];
  }
  return sums;
};

const multiply = function(x) {
  let sums = 1;
  for (let i = 0; i<x.length; i++) {
    sums *= x[i];
  }
  return sums;
};

const power = function(x,y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
let result = 1;
  if (x==1 || x == 0) {
    return 1;
  }

  else {
    for (let i = 1; i<=x; i++) {
      result *= i;
    }
  }
  return result;
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
