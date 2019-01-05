const twoAddUp = require("./dcp-01");

const list = [1, 2];
let k;

test("adding two numbers from the list should equal 3", () => {
  k = 3;
  expect(twoAddUp(list, k)).toBe(true);
});

test("adding two numbers from the list should not equal 4", () => {
  k = 4;
  expect(twoAddUp(list, k)).toBe(false);
});
