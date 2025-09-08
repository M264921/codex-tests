export function greet(name) {
  const n = (name ?? "").trim();
  return `Hello${n ? ", " + n : ""}!`;
}

// touch: 2025-09-08T15:12:55.6695220+02:00

// verify pre-commit: 2025-09-08T16:09:31.2211225+02:00
