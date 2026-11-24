// The Funniest Out-of-Office — make.fun entry (@sausage-sosis).
// Writes a single-line out-of-office auto-reply (<=140 chars) to /output/entry.txt.
// Deterministic: same bytes on every run. No network, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office until Monday. Please contact my colleague Gary, who is also on leave but too polite to say so.";

// The sealed scorer only accepts 1–140 characters of non-whitespace UTF-8
// text, so fail loudly instead of writing an entry that cannot be judged.
if ([...LINE].length < 1 || [...LINE].length > 140 || !LINE.trim()) {
  throw new Error(`entry must be 1-140 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
