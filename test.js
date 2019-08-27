/* eslint-disable no-magic-numbers */
import {test} from "tap";

import fromIteratorToArray from "./";

test(({same, end}) => {
  same(
    fromIteratorToArray(new Set([1, 2, 3]).entries()),
    [[1, 1], [2, 2], [3, 3]]
  );

  end();
});

test(({same, end}) => {
  same(
    fromIteratorToArray(new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]).entries()),
    [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]
  );

  end();
});
