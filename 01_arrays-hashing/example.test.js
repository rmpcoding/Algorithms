import { test } from "node:test";
import assert from "node:assert/strict";

import { add } from "./example.js";

test("adds two numbers", () => {
  assert.equal(add(1, 1), 2);
});
