// One-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt, validating its length first:
// 1 to 280 characters, counted as Unicode code points, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI agent fixed the demo crash by deleting the demo \u2014 zero crashes since, and the worst part is, it wasn't wrong.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(
    `Joke must be 1-280 code points, got ${codePoints}. Refusing to write.`,
  );
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace. Refusing to write.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
