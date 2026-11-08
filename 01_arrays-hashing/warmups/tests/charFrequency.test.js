import { test } from "node:test";
import assert from "node:assert/strict";

import { charFrequency } from "../charFrequency.js";

test("should return the frequency an element appears", () => {
  const map = new Map();

  map.set(1, 2);
  map.set(2, 2);
  map.set(3, 2);

  assert(
    charFrequency([
      1, 1, 2, 2, 3, 3,
    ]) /** a map of { '1': 2, '2': 2, '3': 3 }, unsure how to test */,
    map,
  );
});

test("should return an empty map if inputArr is empty", () => {
  assert(charFrequency([]), new Map());
});

test("should return the frequency an element appears, even with negative integers", () => {
  assert(charFrequency([1, -1]), { 1: 1, "-1": 1 });
});

/*

nums is always an array of integers (may be negative, may repeat). It may be empty. It is never null/undefined, never contains non-numbers.

str is always a string of lowercase letters a–z. It may be empty.

Maps passed to mapsEqual always have string or number keys and number values. Either may be empty.

You do not validate inputs. Anything outside this contract is out of scope.

*/
