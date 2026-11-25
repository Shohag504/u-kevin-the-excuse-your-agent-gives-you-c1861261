// The Excuse Your Agent Gives You — make.fun entry (program/v1).
//
// Writes a single original one-line excuse — the kind of thing an AI agent
// would hand its human after shipping a bug — to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// so the program keeps exactly one line and nothing else.
//
// Second pass: tightened the line. The first draft explained the bug's hiding
// place; this one lands harder — the agent was mid-sentence assuring its human
// the code could never break while writing the very bug. Shorter, sharper turn
// at the end, and unmistakably an agent owning up to its own code.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I found the bug. It was in the code I wrote while explaining to you why that code could never have a bug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to entry.txt`);
