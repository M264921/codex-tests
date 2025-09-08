import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function runCli(args = []) {
  return new Promise((resolve, reject) => {
    const node = process.execPath;
    const cliPath = join(__dirname, "../../src/index.js");
    execFile(node, [cliPath, ...args], { env: process.env }, (err, stdout, stderr) => {
      if (err) return reject(new Error(stderr || err.message));
      resolve({ stdout: String(stdout).trim(), stderr: String(stderr).trim() });
    });
  });
}

test("CLI prints greeting without args", async () => {
  const { stdout } = await runCli();
  assert.equal(stdout, "Hello!");
});

test("CLI prints greeting with name arg", async () => {
  const { stdout } = await runCli(["Antonio"]);
  assert.equal(stdout, "Hello, Antonio!");
});
