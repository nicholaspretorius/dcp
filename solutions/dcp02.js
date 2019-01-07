// Date: 06/01/2019
// Start: 16:05  End: 17:21
// Problem: Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except for i.
// Exampe: Given array [1,2,3,4,5] the output would be [120, 60 40, 30, 24]
// Example: given array [3,2,1] the output would be [2,3,6]

// First attempt 06/01/2019
function multiply(current, numbers) {
  let total = 1;
  for (let j = 0; j < numbers.length; j++) {
    if (j !== current) {
      total = total * numbers[j];
    }
  }
  return total;
}

// Second attempt 07/01/2019
function multiplyReduce(current, numbers) {
  return numbers
    .filter(number => number !== current)
    .reduce((a, b) => {
      return a * b;
    });
}

// First attempt 06/01/2019
function products(numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    output.push(multiply(i, numbers));
    //output.push(multiplyReduce(numbers[i], numbers));
  }
  return output;
}

// Second attempt 07/01/2019
function productsMap(numbers) {
  return numbers.map(number => multiplyReduce(number, numbers));
}

//const numbers = [3, 2, 1];
//const numbers = [1, 2, 3, 4, 5];
//const numbers = [5, 6, 7];

//console.log(products(numbers));
//console.log(productsMap(numbers));

module.exports = productsMap;
