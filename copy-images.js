import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = [
  'ERP Web.png',
  'Flow State 1.png',
  'Flow State 2.png',
  'Pharma One.png',
  'Spam it.png'
];

files.forEach(file => {
  const src = join(__dirname, file);
  const dest = join(__dirname, 'public', file);
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`Copied: ${file}`);
  } else {
    console.log(`Not found: ${file}`);
  }
});
console.log('Done!');
