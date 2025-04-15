const addition = require("../index");

test("2 + 3 = 5", () => {
  expect(addition(2, 3)).toBe(5);
});
