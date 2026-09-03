---
title: Raspberry Pi Zero W Camera for Sketch Time-Lapse
tags:
  - Raspberry Pi
  - Camera
  - Time-Lapse
  - ffmpeg
  - SSH
  - Sketching
date: 2026-09-03 15:00:00
---

A follow-up to my [Raspberry Pi Zero W home server post](/2026/08/29/setting-up-a-raspberry-pi-zero-w-as-a-home-server/), this time putting the camera module to use. The goal was to capture a time-lapse of a sketching session, starting from a blank sheet of ARCHES Aquarelle cold-pressed watercolor paper (300 g/m² / 140 lb, 18 x 26 cm / 7 x 10 in) and working toward a bicycle I'd spotted in a magazine. The clip stops mid-drawing rather than on a finished piece, but by the end it's clearly recognizable as a bicycle. My tools were a Faber-Castell 2B Pitt Graphite Matt pencil for the initial lines, followed by a Faber-Castell Ecco Pigment 0.3 pen.

## A Locale Detour

Before any of the camera work, SSH-ing into the Pi threw a wall of `perl: warning: Setting locale failed` errors, left over from a `dpkg-reconfigure locales` run during the initial board setup. The cause was my Mac's Terminal forwarding an `LC_CTYPE=UTF-8` environment variable over SSH. That isn't a real locale name, just a macOS quirk. I fixed it on the Pi by commenting out the `AcceptEnv` line in `/etc/ssh/sshd_config`, so the SSH server stops accepting the forwarded `LC_*` variables.

```
#AcceptEnv LANG LC_* COLORTERM NO_COLOR
```

## The Plan

Shoot a still photo at a fixed interval for the length of a sketch session, then pull the images down to my Mac and stitch them into a video with ffmpeg. One self-contained script that runs for a single session and stops. I didn't need continuous recording, so there's no cron scheduling at all.

## Picking an Interval

I settled on one shot every 10 seconds for 20 minutes, 120 frames in total. A timing test showed that `rpicam-still` takes about 4.4 seconds to capture at full resolution on the Pi Zero W's chip, so my first attempt at a 6-second interval left too little headroom. 10 seconds was safer.

120 frames was itself a revision down from 200. nano had been painfully slow on the Pi and froze up a few times, so I made the change with `sed -i` instead of opening the file:

```bash
sed -i 's/200 frames/120 frames/' pizerow-sketch-timelapse.sh
```

## The Script

```bash
#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)/captures"
mkdir -p "$DIR"

for i in $(seq 1 120); do
    rpicam-still -o "$DIR/$(date +%Y%m%d_%H%M%S).jpg" --nopreview -t 1
    sleep 10
done

echo "Done. 120 frames captured in $DIR"
```

Timestamped filenames keep every capture unique and already sorted, with no manual numbering needed.

I made the script executable:

```bash
chmod +x pizerow-sketch-timelapse.sh
```

Then I run it the moment I sit down to sketch.

The actual time between frames is the sleep time plus the capture time, so a "10 second" interval was really closer to 14 seconds, and the "20 minute" session ran for about 26 minutes. It didn't matter here, but it's worth knowing if you need an exact session length.

## Start Recording

By this point everything was in place. The project folder existed, the script was written and tested, and the executable bit was set. I propped the camera in position facing the sketch area, using a random desk calendar as a stand, and started the run.

```bash
./pizerow-sketch-timelapse.sh
```

From there the script was on its own for the whole session. I just sketched a bicycle and let it shoot. The one thing I couldn't control was framing. With no monitor on the Pi, I had no way to check the camera angle while it recorded, so the whole take could have come back with the drawing sitting out of frame. It didn't. Everything landed inside the frame, and the footage came out better than I expected.

## Stitching the Video

Pull the images down with `scp`:

```bash
scp -r pizerow:~/pizerow-sketch-timelapse/captures ~/Desktop/sketch-captures
```

Then encode on the Mac. Encoding on the Pi itself would be painfully slow:

```bash
ffmpeg -framerate 4 -pattern_type glob -i '*.jpg' \
  -vf "transpose=2,transpose=2,eq=brightness=0.12:contrast=1.15:saturation=1.05,colorbalance=rm=0.05:rs=0.05:rh=0.05" \
  -vcodec libx264 -pix_fmt yuv420p sketch_timelapse.mp4
```

That single command handles three fixes at once. Pacing comes from `-framerate 4`, which gives a roughly 30-second clip; 6fps felt too fast. Orientation is corrected with `transpose=2,transpose=2`, since the camera was mounted upside down. Color also fixed a bit to brightening the frames and warming the tone back up, since the first pass was a touch dim and cool.

## Result

A roughly 30-second clip of a bicycle sketch taking shape on Aquarelle paper, from the first pencil lines (2B Pitt Graphite Matt) through inking (Ecco Pigment 0.3), stopping mid-drawing but recognizably a bicycle by the end. Shot on a Raspberry Pi Zero W camera module propped up on a desk calendar.
