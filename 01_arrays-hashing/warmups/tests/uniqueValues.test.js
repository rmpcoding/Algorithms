import { test } from "node:test";
import assert from "node:assert/strict";

import { uniqueValues } from "../uniqueValues.js";

test("uniqueValues should return a Set of an array's values", () => {
  const arr = [1, 2, 3];
  const set = uniqueValues(arr);

  assert.equal(set.has(1), true);
  assert.equal(set.has(2), true);
  assert.equal(set.has(3), true);
  assert.deepEqual([...set], arr);
});

test("uniqueValues should return a new set with nothing inside if there is no input array", () => {
  const arr = [];
  const set = new Set(arr);

  assert.deepEqual([...set], arr); // turn set back into an array
  assert.deepEqual([...set].length, 0);
});

test("uniqueValues should return the unique number if there is only one value repeated in the input array", () => {
  const arr = [7, 7, 7, 7];
  const set = uniqueValues(arr);

  assert.equal(set.has(7), true);
  assert.deepEqual([...set].length, 1); // turn set back into an array
  assert.deepEqual([...set][0], 7);
});
