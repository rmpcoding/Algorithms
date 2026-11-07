import { test } from "node:test";
import assert from "node:assert/strict";

import { containsSeven } from "../containsSeven.js";

test("containsSeven should pass with a 7 inside the input array", () => {
  assert.equal(containsSeven([1, 2, 3, 4, 5, 6, 7]), true);
});

test("containsSeven should fail if there is no 7 inside the input array", () => {
  assert.equal(containsSeven([]), false);
});

test("containsSeven should pass if there is more than one 7 inside the input array", () => {
  assert.equal(containsSeven([1, 2, 7, 7]), true);
});
