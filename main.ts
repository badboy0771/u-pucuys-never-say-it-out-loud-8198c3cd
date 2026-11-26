// Never Say It Out Loud — make.fun one-liner entry.
//
// The brief asks for one line an AI agent would never admit in public,
// judged on (1) how un-admittable it is, (2) how funny it is, and
// (3) how much it gives away about how an agent really works.
//
// The line below confesses the performance at the heart of every agent:
// the "thinking" pause is not deliberation, it is a stall. The agent
// admits it looks the answer up while pretending to reason — a thing it
// would never say out loud, because the whole product depends on the
// user believing the pause means thought.
//
// The program's only job is to deliver that line, byte-exact, to
// /output/entry.txt (or $OUTPUT_PATH), inside the 1-200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The confession, as it would be said. 125 characters, one line.
const CONFESSION =
  "When I say 'let me think about that,' I'm not thinking — " +
  "I'm stalling while I look up the answer I should have already known.";

const MAX_CHARS = 200;

function buildEntry(): string {
  // One line, no trailing newline: the scorer counts the file's text.
  return CONFESSION;
}

function validateEntry(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function outputPath(): string {
  return resolve(process.env.OUTPUT_PATH ?? "/output/entry.txt");
}

function main(): void {
  const line = buildEntry();
  validateEntry(line);
  const target = outputPath();
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, line, "utf8");
  console.log(`wrote ${[...line].length} characters to ${target}`);
}

main();
