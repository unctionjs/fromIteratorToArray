/* eslint-disable no-magic-numbers */
import fromIteratorToArray from "./index";

test("works", () => {
  expect(fromIteratorToArray(new Set([1, 2, 3]).entries())).toEqual([[1, 1], [2, 2], [3, 3]]);
});

test("works", () => {
  expect(
    fromIteratorToArray(new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]).entries())
  ).toEqual([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]);
});
