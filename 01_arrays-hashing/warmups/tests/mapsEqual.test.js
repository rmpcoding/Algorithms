import { test } from "node:test";
import assert from "node:assert/strict";

import { mapsEqual } from "../mapsEqual.js";

// mapsEqual(a, b) → true if two Maps have the same keys with the same values.
// TODO: erase the todo.

test.todo(
  "should return true for two Maps that have the same keys with the same values",
  () => {
    const a = new Map([["a", 1]]);
    const b = new Map([["a", 1]]);
  },
);

test.todo(
  "should return false for two Maps that have different keys with the same values",
  () => {
    const a = new Map([[1, 1]]);
    const b = new Map([["1", 1]]);
  },
);

test.todo(
  "should return false for two Maps that have the same keys but different values",
  () => {
    const a = new Map([["a", 1]]);
    const b = new Map([["a", 2]]);
  },
);

test.todo("should return true for two empty Maps", () => {
  const a = new Map();
  const b = new Map();
});

/*
  nums is always an array of integers (may be negative, may repeat). It may be empty. It is never null/undefined, never contains non-numbers.
  str is always a string of lowercase letters a–z. It may be empty.
  Maps passed to mapsEqual always have string or number keys and number values. Either may be empty.
  You do not validate inputs. Anything outside this contract is out of scope.
*/
