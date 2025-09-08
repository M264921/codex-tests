import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function resolveBinPath() {
  // Read local package.json bin mapping (works in ESM via createRequire)
  const require = createRequire(import.meta.url);
  const pkg = require("../../package.json");
  const binRel = pkg.bin?.["anton-greet"]; // expected: "src/index.js"
  if (!binRel) throw new Error("bin mapping for 'anton-greet' not found");
  return join(__dirname, "../../", binRel);
}

function runBin(args = []) {
  return new Promise((resolve, reject) => {
    const node = process.execPath;
    const binPath = resolveBinPath();
    execFile(node, [binPath, ...args], { env: process.env }, (err, stdout, stderr) => {
      if (err) return reject(new Error(stderr || err.message));
      resolve({ stdout: String(stdout).trim(), stderr: String(stderr).trim() });
    });
  });
}

test("bin without args -> Hello!", async () => {
  const { stdout } = await runBin();
  assert.equal(stdout, "Hello!");
});

test("bin with name -> Hello, <name>!", async () => {
  const { stdout } = await runBin(["Antonio"]);
  assert.equal(stdout, "Hello, Antonio!");
});

test("bin with --shout -> uppercase", async () => {
  const { stdout: a } = await runBin(["--shout"]);
  assert.equal(a, "HELLO!");
  const { stdout: b } = await runBin(["Antonio", "--shout"]);
  assert.equal(b, "HELLO, ANTONIO!");
});
