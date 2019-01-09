const { cons, cdr, car } = require("./dcp05");

test("it should return 3", () => {
  expect(car(cons(3, 4))).toBe(3);
});

test("it should return 3", () => {
  expect(cdr(cons(3, 4))).toBe(4);
});
