---
title: Setting Up a Raspberry Pi Zero W as a Home Server
tags:
  - Raspberry Pi
  - SSH
  - Linux
  - Claude
  - Networking
date: 2026-08-29 16:43:18
---

I picked up a Raspberry Pi Zero W with a simple goal, to practice SSH properly, from flashing a card to logging in with a key instead of a password. This was a small exercise project over a Friday and Saturday, mainly to practice flashing a card, setting up the Pi Zero W, and practicing SSH. It turned into a full home-server project, and most of the actual debugging had nothing to do with the Pi at all.

## Flashing the Card

No monitor, no keyboard. Everything had to work over WiFi from first boot. Raspberry Pi Imager makes this possible through its advanced customisation screen.

I picked **Raspberry Pi OS Lite (32-bit)**, not the default Desktop image, for two reasons. The Zero W's chip is a single-core ARMv6, which can't run 64-bit code at all, and a desktop environment is pure overhead on a headless 512MB board with no monitor attached.

For SSH, I generated a dedicated keypair instead of reusing an existing one.

One keypair per purpose is good hygiene, but it has a cost. `ssh` only auto-tries default filenames like `id_ed25519`. Anything custom-named needs an explicit `-i` flag, or an entry in `~/.ssh/config`.

First boot took about 90 seconds before the Pi was actually reachable, since it was resizing the filesystem and applying all the customisation in the background.

## The WiFi That Wouldn't Connect

First boot, and the Pi never showed up on the router's client list. The Zero W's WiFi chip (Broadcom BCM43438) has a known weak spot. It struggles with **WPA2/WPA3 mixed mode**, which is the default on a lot of modern routers. It doesn't fail loudly, it just never associates. The fix was setting the 2.4GHz band to WPA2 only.

Lesson learned, if a Pi Zero silently refuses to join WiFi, check the router's security mode before assuming a hardware or SD card problem.

## The macOS Local Network Rabbit Hole

With WiFi fixed, `ping` still failed with `sendto: No route to host`, on the same subnet, which ruled out routing. The actual cause was **"Limit IP Address Tracking,"** a macOS privacy feature (System Settings → WiFi → ⓘ next to the network) that can quietly break reachability to devices on your own LAN.

That fixed Terminal.app. Then Claude Code, running through my Bash tool, hit the exact same wall, a raw IP connection timed out completely. Same root cause, different app. **System Settings → Privacy & Security → Local Network** gates which apps are allowed to talk to LAN devices at all, and each app needs its own separate grant. VS Code wasn't on the list. Then Chrome hit it a third time, except Chrome had accumulated a dozen stale duplicate entries in that list from auto-updates over time, each toggled off, with no obvious way to tell which one was the live process.

Three different apps, one underlying macOS restriction, three separate fixes. None of it was Raspberry Pi trouble.

## Deciding Not to Use a Self-Hosted GitHub Actions Runner

My first instinct was to register the Pi as a GitHub Actions self-hosted runner, so pushing to `master` would build and deploy directly on the device. Two things changed my mind.

1. A self-hosted runner just long-polls GitHub over outbound HTTPS, and it has nothing to do with SSH, so it wouldn't teach me what I actually set out to learn.
2. Running `npm install` and `hexo generate` on a single-core, 512MB board is a bad time, and risks running out of memory on every deploy.

Instead, the build stays exactly where it already was, on GitHub's cloud runners, publishing to the `gh-pages` branch and GitHub Pages, completely untouched. The Pi just pulls the already-built static files.

nginx serves that folder directly, and a cron job keeps it in sync.

```
0 * * * * cd /var/www/blog && git pull origin gh-pages >> /home/yh/blog-pull.log 2>&1
```

No inbound ports, no new GitHub secrets, nothing exposed past my home network. Just a passive mirror that refreshes itself every hour.

## Why It Feels Instant

The first time it loaded, I was surprised by how fast it was for a device this weak. But there's no dynamic work happening on the Pi at all. Hexo already rendered every page into static HTML during the GitHub Actions build. nginx's only job is reading files off the SD card and streaming bytes over WiFi, which is almost entirely I/O, not computation. Cheap work on cheap hardware, over a LAN with basically no latency, adds up to feeling instant.

## Closing Thoughts

Working through this with Claude Code turned out to be less about writing any code and more about narrowing down which layer a failure lived in (router, macOS, or the Pi itself) one symptom at a time. `No route to host` alone pointed to three unrelated root causes over the course of the project. Debugging over a live SSH session, pasting real command output back and forth, made each dead end quick to rule out instead of a guessing game. The Pi Zero W I bought to practice SSH now quietly mirrors this very blog on my home network, and every step of getting there taught me more about my own laptop than about the Pi.
