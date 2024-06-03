const findShortestString = require("./find-shortest-string");

test("finds shortest string in a mixture of string lengths", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});
test("returns the first string what multiple shortest strings are present", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
});
