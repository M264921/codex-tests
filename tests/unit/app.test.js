import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../../src/app.js";

test("greet without name", () => {
  assert.equal(greet(), "Hello!");
});

test("greet with name", () => {
  assert.equal(greet("World"), "Hello, World!");
});

test("greet trims name", () => {
  assert.equal(greet("  Alice  "), "Hello, Alice!");
});
