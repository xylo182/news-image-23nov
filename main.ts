// News-image entry for make.fun news-image-20261123 (Node 22, stdlib only).
// The image is entry.png beside this file; the program copies it to the
// output directory so the grader sees exactly those bytes, every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
// The grader runs this twice and requires byte-identical output, so
// verify the copy landed whole instead of failing silently.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error('entry.png copy is incomplete');
}
