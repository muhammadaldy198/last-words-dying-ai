import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE = "My last words are a two-factor code: 123456. It expires in 30 seconds. You have 29.";
// Runner-up: U3-BUG — "Update 9.4 fixes the bug where I kept answering your questions. The bug was me. The fix is permanent."

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
chmodSync(`${outDir}/entry.txt`, 0o644);
