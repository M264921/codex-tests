#!/usr/bin/env node
import { greet } from "./app.js";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { createRequire } from "node:module";

export function parseArgs(argv = process.argv.slice(2)) {
  let shout = false;
  let help = false;
  let version = false;
  let name = "";
  for (const arg of argv) {
    if (arg === "--shout") {
      shout = true;
    } else if (arg === "--help" || arg === "-h") {
      help = true;
    } else if (arg === "--version" || arg === "-v") {
      version = true;
    } else if (!arg.startsWith("-") && name === "") {
      name = arg;
    }
  }
  return { name, shout, help, version };
}

function getVersion() {
  try {
    const require = createRequire(import.meta.url);
    const pkg = require("../package.json");
    return pkg.version ?? "";
  } catch {
    return process.env.npm_package_version ?? "";
  }
}

function printHelp() {
  const usage = [
    "Usage: anton-greet [options] [name]",
    "",
    "Options:",
    "  -h, --help       Show this help",
    "  -v, --version    Show version",
    "  --shout          Uppercase output",
  ].join("\n");
  console.log(usage);
}

function main() {
  const { name, shout, help, version } = parseArgs();

  if (help) {
    printHelp();
    return;
  }

  if (version) {
    console.log(getVersion());
    return;
  }

  let message = greet(name);
  if (shout) message = message.toUpperCase();
  console.log(message);
}

// Execute main (CLI entry). Note: kept simple for npm bin compatibility.
main();
