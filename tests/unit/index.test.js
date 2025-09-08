import test from "node:test";
import assert from "node:assert/strict";
import { parseArgs } from "../../src/index.js";

test("parseArgs with no args", () => {
  assert.deepEqual(parseArgs([]), { name: "", shout: false, help: false, version: false });
});

test("parseArgs with name only", () => {
  assert.deepEqual(parseArgs(["Alice"]), {
    name: "Alice",
    shout: false,
    help: false,
    version: false,
  });
});

test("parseArgs with --shout before name", () => {
  assert.deepEqual(parseArgs(["--shout", "Bob"]), {
    name: "Bob",
    shout: true,
    help: false,
    version: false,
  });
});

test("parseArgs with --shout after name", () => {
  assert.deepEqual(parseArgs(["Bob", "--shout"]), {
    name: "Bob",
    shout: true,
    help: false,
    version: false,
  });
});
