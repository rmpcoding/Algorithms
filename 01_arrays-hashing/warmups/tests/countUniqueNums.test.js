import { test } from "node:test";
import assert from "node:assert/strict";

import { countUniqueNums } from "../countUniqueNums.js";

test("should return the count of all unique numbers", () => {
  assert.strictEqual(countUniqueNums([1, 2, 3]), 3);
});

test("should return the count of all unique numbers, even with repeats", () => {
  assert.strictEqual(countUniqueNums([3, 3, 3]), 1);
});

test("should return 0 if input is empty", () => {
  assert.strictEqual(countUniqueNums([]), 0);
});

/*
  nums is always an array of integers (may be negative, may repeat). It may be empty. It is never null/undefined, never contains non-numbers.
  str is always a string of lowercase letters a–z. It may be empty.
  Maps passed to mapsEqual always have string or number keys and number values. Either may be empty.
  You do not validate inputs. Anything outside this contract is out of scope.
*/
