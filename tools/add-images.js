#!/usr/bin/env node

/**
 * add-images.js
 *
 * Pops up a macOS file picker, compresses selected images with sharp,
 * copies them into the current post's asset folder, and puts ready-to-paste
 * figure markup on the clipboard.
 *
 * Usage (via VS Code task — passes the active file automatically):
 *   node scripts/add-images.js /path/to/source/_posts/2026-03-15-my-post.md
 */

const fs = require('fs');
const path = require('path');
const { execFileSync, spawnSync } = require('child_process');

// ---------------------------------------------------------------------------
// 1. Resolve post file and asset folder
// ---------------------------------------------------------------------------

const postFile = process.argv[2];

if (!postFile) {
  console.error('Error: No post file provided. Run this via the VS Code task.');
  process.exit(1);
}

if (!postFile.endsWith('.md') || !postFile.includes('_posts')) {
  console.error('Error: Active file is not a post. Open a markdown file in _posts first.');
  process.exit(1);
}

const postName = path.basename(postFile, '.md');
const assetFolder = path.join(path.dirname(postFile), postName);

if (!fs.existsSync(assetFolder)) {
  fs.mkdirSync(assetFolder, { recursive: true });
  console.log(`Created asset folder: ${assetFolder}`);
}

console.log(`Post:         ${postName}`);
console.log(`Asset folder: ${assetFolder}`);
console.log('');

// ---------------------------------------------------------------------------
// 2. Show macOS file picker
// ---------------------------------------------------------------------------

const appleScript = `
tell application "Finder" to activate
set theFiles to choose file with prompt "Select images to add to post" of type {"public.image"} with multiple selections allowed
set output to ""
repeat with f in theFiles
  set output to output & POSIX path of f & linefeed
end repeat
return output
`;

const tmpScript = '/tmp/hexo-image-picker.applescript';
fs.writeFileSync(tmpScript, appleScript);

let selectedFiles;
try {
  const result = execFileSync('osascript', [tmpScript], { encoding: 'utf8' }).trim();
  selectedFiles = result.split('\n').filter(Boolean);
} catch (err) {
  if (err.stderr && err.stderr.includes('User canceled')) {
    console.log('No images selected (picker cancelled).');
  } else {
    console.error('File picker error:', err.stderr || err.message);
  }
  process.exit(0);
}

if (selectedFiles.length === 0) {
  console.log('No images selected.');
  process.exit(0);
}

console.log(`Selected ${selectedFiles.length} image(s).\n`);

// ---------------------------------------------------------------------------
// 3. Compress and copy each image
// ---------------------------------------------------------------------------

const JPEG_QUALITY = 82; // 0–100, sips formatOptions

const snippets = [];

for (const srcPath of selectedFiles) {
  const ext = path.extname(srcPath).toLowerCase();
  const filename = path.basename(srcPath).replace(/\s+/g, '-');
  const destPath = path.join(assetFolder, filename);
  const srcSize = fs.statSync(srcPath).size;

  try {
    if (ext === '.jpg' || ext === '.jpeg') {
      execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(JPEG_QUALITY), srcPath, '--out', destPath]);
    } else if (ext === '.png') {
      execFileSync('sips', ['-s', 'format', 'png', srcPath, '--out', destPath]);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  copied (no compression): ${filename}`);
      snippets.push(makeSnippet(filename));
      continue;
    }

    const destSize = fs.statSync(destPath).size;
    const saving = Math.round((1 - destSize / srcSize) * 100);
    console.log(`  compressed: ${filename}  (${kb(srcSize)} → ${kb(destSize)}, ${saving}% smaller)`);
  } catch (err) {
    console.error(`  failed to process ${filename}: ${err.message}`);
    continue;
  }

  snippets.push(makeSnippet(filename));
}

if (snippets.length === 0) {
  console.log('\nNo snippets generated.');
  process.exit(0);
}

// ---------------------------------------------------------------------------
// 4. Print snippets and copy to clipboard
// ---------------------------------------------------------------------------

const output = snippets.join('\n');

console.log('\n--- Copy-paste markup ---\n');
console.log(output);
console.log('\n-------------------------');

spawnSync('pbcopy', [], { input: output, encoding: 'utf8' });
console.log('\nCopied to clipboard. Paste into your post with ⌘V.');

function makeSnippet(filename) {
  return `<figure><img src="{% asset_path ${filename} %}" /><figcaption></figcaption></figure>`;
}

function kb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}
