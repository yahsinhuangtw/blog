---
title: Improving My Hexo Blog Workflow with Claude
tags:
  - Hexo
  - Claude
  - Workflow
  - Tools
  - JavaScript
date: 2026-03-17 14:14:26
---

<!-- Image syntax: <figure><img src="{% asset_path filename.jpg %}" /><figcaption></figcaption></figure> -->
<!-- Use ⌘⇧J to add images via file picker -->


I spent a day improving my Hexo blog with Claude as a coding partner. What started as a simple image-adding problem turned into a series of workflow improvements, bug fixes, and a few useful lessons about Hexo internals. Here's what we built and what I learned.

## The Problem: Adding Images Was Too Many Steps

Every time I wanted to add a photo to a post, the flow was: find the file, copy it to the right asset folder, write the markup, paste it in. With Claude's help, I turned that into a single hotkey.

### Building the Image Tool

We wrote a Node.js script at `tools/add-images.js` that:

1. Pops up a macOS file picker via AppleScript (`osascript`)
2. Compresses the selected images using `sips` (macOS built-in — no npm dependencies)
3. Sanitizes filenames (spaces → hyphens)
4. Copies them to the post's asset folder
5. Generates the correct Hexo markup and copies it to the clipboard

The script is wired to a VS Code task and triggered with `⌘⇧J`. No command palette needed.

```javascript
// Compress with sips — works on any Mac, no npm install required
execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '82', srcPath, '--out', destPath]);
```

### The `scripts/` Gotcha

The first version of the script crashed on startup. The reason: **Hexo auto-loads everything in the `scripts/` directory as a plugin**. Our script wasn't a Hexo plugin — it used `process.argv` and tried to open GUI dialogs. Moving it to `tools/` fixed the problem immediately.

Lesson: never put standalone Node scripts in `scripts/` in a Hexo project.

### Node Version Mismatch

The original script used `sharp` for image compression, which requires Node 18+. My system was running Node 14.16.0. Rather than upgrade Node just for one dependency, we switched to `sips` — a macOS built-in that handles JPEG and PNG compression without any npm packages at all.

---

## Hexo Internals: asset_path and the Cache Problem

When the images weren't rendering after the fix, Claude traced the issue to the broken Hexo startup (caused by the `scripts/` issue above). Hexo's tag processing pipeline was failing silently, causing `{% asset_path %}` to output empty strings. After moving the script and running `hexo clean`, everything worked.

The correct image syntax for `hexo-renderer-marked` v6:

```html
<figure><img src="{% asset_path filename.jpg %}" /><figcaption></figcaption></figure>
```

---

## Furigana with HTML Ruby Tags

For my Jpop lyrics post, I wanted furigana — the small hiragana characters that appear above kanji. HTML has native support for this via the `<ruby>` tag:

```html
<ruby>最後<rt>さいご</rt></ruby>のキスはタバコの flavor がした
```

Renders as: 最後 with さいご floating above. Claude converted all the parenthetical readings in my post. For kanji with okurigana, only the kanji gets annotated:

```html
<ruby>香<rt>かお</rt></ruby>り  <!-- not: <ruby>香り<rt>かおり</rt></ruby> -->
```

---

## YAML Gotcha: Colons in Titles

I renamed the post to include a colon and the blog broke immediately:

```
YAMLException: bad indentation of a mapping entry (1:25)
```

The colon in the title is a special character in YAML. The fix is simple — wrap the title in quotes:

```yaml
title: "宇多田ヒカル First Love: Japanese Lyrics Breakdown for Learners"
```

Any time your post title contains `:`, `#`, `[`, `]`, or `{`, quote it.


---

## What Worked Well About Pairing with Claude

The biggest value of pairing with Claude wasn't writing code faster; it was catching things I would have missed. The scripts/ directory issue, the Hexo cache problem, the YAML colon rule are the kinds of things that cost an hour of searching Stack Overflow. Having Claude trace each error from symptom to root cause directly made the session much more efficient. 

The workflow that worked best was describing the symptom, letting Claude read the relevant files, and agreeing on a fix before applying it; reviewing the plan first saved a couple of unnecessary back-and-forths. The blog is in better shape now than when I started.
