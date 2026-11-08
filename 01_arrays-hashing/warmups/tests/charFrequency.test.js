import { test } from "node:test";
import assert from "node:assert/strict";

import { charFrequency } from "../charFrequency.js";

test("should return the frequency an element appears", () => {
  const map = new Map();

  map.set("a", 2);
  map.set("b", 2);
  map.set("c", 2);

  assert.deepEqual(charFrequency("aabbcc"), map);
});

test("should return an empty map if inputArr is empty", () => {
  assert.deepEqual(charFrequency(""), new Map());
});

test("should return the frequency an element appears with one unique repeating character", () => {
  assert.deepEqual(charFrequency("aaa"), new Map([["a", 3]]));
});

/*
  nums is always an array of integers (may be negative, may repeat). It may be empty. It is never null/undefined, never contains non-numbers.
  str is always a string of lowercase letters a–z. It may be empty.
  Maps passed to mapsEqual always have string or number keys and number values. Either may be empty.
  You do not validate inputs. Anything outside this contract is out of scope.
*/
