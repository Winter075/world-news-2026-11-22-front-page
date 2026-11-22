// News image for Sunday 22 November 2026 (Node 22, standard library only).
// The committed entry.png is copied to /output/entry.png. No network is used
// at run time, and both grader runs write the same bytes.
//
// Outside the grader container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const source = join(here, 'entry.png');
  const destination = join(outputDir, 'entry.png');

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
  console.log(`wrote ${destination}`);
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`entry failed: ${message}`);
  process.exitCode = 1;
}
