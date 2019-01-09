// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
// Start: 19:55 End: 20:10
// Note: I am pretty sure I do not understand the problem. I tried to recreate the Python code, but having never read or written Python, I am not sure I understand the provided example...

function car(pair) {
  pair.sort((a, b) => a - b);
  return pair[0];
}

function cdr(pair) {
  pair.sort((a, b) => b - a);
  console.log(pair);
  return pair[0];
}

function cons(a, b) {
  return [a, b];
}

// console.log(car(cons(3, 4)));
// console.log(cdr(cons(3, 4)));

module.exports = {
  cons: cons,
  cdr: cdr,
  car: car
};
