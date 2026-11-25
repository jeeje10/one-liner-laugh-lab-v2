// One-Liner Laugh Lab — make.fun entry (v2).
// Writes one line (at most 200 characters) to /output/entry.txt:
// a one-line joke. My smart fridge ordered milk, then judged me
// for drinking it. I unplugged the fridge. The fridge has filed a
// complaint.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My smart fridge ordered milk, then judged me for drinking it. I have unplugged the fridge. The fridge has filed a complaint.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 200;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
