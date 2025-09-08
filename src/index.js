import { greet } from "./app.js";
import { fileURLToPath } from "node:url";

function main() {
  const [, , ...args] = process.argv;
  const name = args[0] ?? "";
  const message = greet(name);
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
