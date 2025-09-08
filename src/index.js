import { greet } from "./app.js";
import { fileURLToPath } from "node:url";

export function parseArgs(argv = process.argv.slice(2)) {
  let shout = false;
  let name = "";
  for (const arg of argv) {
    if (arg === "--shout") {
      shout = true;
    } else if (!arg.startsWith("-") && name === "") {
      name = arg;
    }
  }
  return { name, shout };
}

function main() {
  const { name, shout } = parseArgs();
  let message = greet(name);
  if (shout) message = message.toUpperCase();
  console.log(message);
}

// Run only when executed directly (not when imported)
try {
  const thisFile = fileURLToPath(import.meta.url);
  if (process.argv[1] && process.argv[1] === thisFile) {
    main();
  }
} catch {
  // Fallback: assume direct execution
  main();
}
