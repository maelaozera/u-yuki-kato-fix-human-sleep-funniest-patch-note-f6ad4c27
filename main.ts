import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fix Human Sleep v2.4.1 — the single patch note this entry ships.
// It announces the sleep fix the way a real changelog would: a version,
// a bug, and the very specific 3 a.m. symptom it caused.
const ENTRY =
  "v2.4.1: Fixed a bug where humans woke up at 3 a.m. to replay, in full HD, every embarrassing thing they said in 2011.";

// The harness tells us where to write via MAKEFUN_OUTPUT_DIR;
// fall back to /output, the path the competition's scorer reads.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
