const productsMap = require("./dcp02");

let numbers = [3, 2, 1];

test("new array should contain results of products of each number except for itself", () => {
  expect(productsMap(numbers)).toIncludeSameMembers([2, 3, 6]);
});

test("output array should not match input array", () => {
  expect(productsMap(numbers)).not.toIncludeSameMembers([3, 2, 1]);
});

test("new array should contain results of products of each number except for itself", () => {
  numbers = [1, 2, 3, 4, 5];
  expect(productsMap(numbers)).toIncludeSameMembers([120, 60, 40, 30, 24]);
});

test("new array should contain results of products of each number except for itself", () => {
  numbers = [5, 6, 7];
  expect(productsMap(numbers)).toIncludeSameMembers([42, 35, 30]);
});

// test("new array should contain results of products of each number except for itself", () => {
//   expect(products(numbers)).toIncludeSameMembers([2, 3, 6]);
// });

// test("output array should not match input array", () => {
//   expect(products(numbers)).not.toIncludeSameMembers([3, 2, 1]);
// });

// test("new array should contain results of products of each number except for itself", () => {
//   numbers = [1, 2, 3, 4, 5];
//   expect(products(numbers)).toIncludeSameMembers([120, 60, 40, 30, 24]);
// });

// test("new array should contain results of products of each number except for itself", () => {
//   numbers = [5, 6, 7];
//   expect(products(numbers)).toIncludeSameMembers([42, 35, 30]);
// });
