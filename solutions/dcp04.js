// Problem: Given an array of integers, find the first (lowest) missing positive integer in the array.
// Example: [3,4,-1,1] should give you 2.
// Example: [1,2,0] should give 3.
// Start: 19:02 End:

function sortNumbers(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function findMissing(numbers) {
  for (let i = numbers.length; i--; numbers.length) {
    if (numbers[i] - numbers[i - 1] > 1) {
      return numbers[i] - 1;
    }
  }
}

function findHighest(numbers) {
  return numbers[numbers.length - 1] + 1;
}

function findLowestMissing(numbers) {
  numbers.sort(sortNumbers);

  let missing = findMissing(numbers);

  if (missing === undefined) {
    missing = findHighest(numbers);
  }

  return missing;
}

//const input = [3, 4, -1, 1];
//const input = [5, 5, 3, 0, -1]; // 4
//const input = [3, 2, -3]; // 1
//const input = [1, 2, 0];

//console.log(findLowestMissing(input));

module.exports = findLowestMissing;
