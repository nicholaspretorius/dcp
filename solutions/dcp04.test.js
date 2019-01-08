const findLowestMissing = require("./dcp04");

test("should find lowest missing positive integer in array", () => {
  const input = [3, 4, -1, 1];
  expect(findLowestMissing(input)).toBe(2);
});

test("should find lowest missing positive integer in array", () => {
  const input = [1, 2, 0];
  expect(findLowestMissing(input)).toBe(3);
});

test("should find lowest missing positive integer in array", () => {
  const input = [5, 5, 3, 0, -1];
  expect(findLowestMissing(input)).toBe(4);
});

test("should find lowest missing positive integer in array", () => {
  const input = [3, 2, -3];
  expect(findLowestMissing(input)).toBe(1);
});
