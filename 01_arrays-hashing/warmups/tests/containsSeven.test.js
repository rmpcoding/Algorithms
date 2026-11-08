import { test } from "node:test";
import assert from "node:assert/strict";

import { containsSeven } from "../containsSeven.js";

test("should return true when a 7 is inside the input array", () => {
  assert.strictEqual(containsSeven([1, 2, 3, 4, 5, 6, 7]), true);
});

test("should return false if there is no 7 inside the input array", () => {
  assert.strictEqual(containsSeven([1, 2, 3]), false);
});

test("should return true if there is more than one 7 inside the input array", () => {
  assert.strictEqual(containsSeven([1, 2, 7, 7]), true);
});

test("should return false if the input array is empty", () => {
  assert.strictEqual(containsSeven([]), false);
});

test.todo(
  "what should the function return if a negative 7 is present?",
  () => {},
);
