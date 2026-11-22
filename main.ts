// Deterministic entry for make.fun news-image-20261122.
// The finished picture ships with the repository. This program only reads its
// bytes and writes them once, to the single output path the harness expects.
// No clock, network call or environment-derived value changes those bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Anchor the source path to this file, not to the process working directory.
const folder = dirname(fileURLToPath(import.meta.url));
const picture = readFileSync(resolve(folder, 'entry.png'));
const target = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, picture);
console.log(`wrote ${target} (${picture.length} bytes)`);
