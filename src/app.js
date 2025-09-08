export function greet(name) {
  const n = (name ?? "").trim();
  return `Hello${n ? ", " + n : ""}!`;
}

// touch: 2025-09-08T15:12:55.6695220+02:00
