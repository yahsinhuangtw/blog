---
title: Mikerah-on-Ethereum-Access-Privacy-at-Taipei-Ethereum-Meetup-May-Event
date: 2020-06-07 18:30:00
tags:
---


On Wednesday (5/27), [Mikerah Quintyne-Collins](https://twitter.com/badcryptobitch), a blockchain researcher from Toronto, Canada, gave a 30-minute talk on "Ethereum Access Privacy" at [Taipei Ethereum Meetup](https://medium.com/taipei-ethereum-meetup) online event. Watch the livestreamed event on [YouTube](https://youtu.be/A4oNobjHr-8). Presentation [slides](https://hackmd.io/@yBpKEsxORheI8AJoIiZj1Q/Hkb5hM1sL#/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/A4oNobjHr-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Talk Description:
Despite the onslaught of on-chain privacy solutions for [Ethereum](https://ethereum.org/what-is-ethereum/), Ethereum users are still subjected to attacks at the network-level and metadata leakage that reveal how users interact with Ethereum. The goal of this talk is to discuss this open area of research and motivate the audience to think more deeply around issues access privacy for Ethereum. The talk is inspired by a [paper](https://www.cs.purdue.edu/homes/akate/publications/BlockchainAccessPrivacy_preprint.pdf) by Henry et al on the topic of Blockchain Privacy Access.

Speaker Introduction:
[Mikerah Quintyne-Collins](https://github.com/Mikerah) is an independent researcher and founder and CEO of [HashCloak](https://github.com/hashcloak), a blockchain privacy R&D startup with a global team. Her research focuses on networking, validator privacy, and optimistic rollups. She organized Scaling Ethereum, a research workshop bringing together top Ethereum researchers to work on Ethereum's most pressing scalability problems. Currently, she’s focused on privacy for blockchains, specifically mixers and mix networks for cryptocurrency transactions. Previously, she was part of the ChainSafe Systems team working on ETH2.0, namely the Lodestar Typescript client. She was awarded a Vitalik YOLO grant for her work on ETH2.0. She also co-founded the University of Toronto Blockchain Group, a student club, focused on engaging the blockchain community at the University of Toronto. During her time at UofT Blockchain Group, she organized the largest student-run ETH docused hackathon in Canada, in 2018. During her free time, she enjoys reading wikipedia articles and taking naps.

Below are some of the questions I asked prior to the event.

Q: In the [paper](https://www.cs.purdue.edu/homes/akate/publications/BlockchainAccessPrivacy_preprint.pdf) by Henry et al on the topic of Blockchain Privacy Access, the authors mentioned several times about [Tor](https://en.wikipedia.org/wiki/Tor_%28anonymity_network%29) - how it's been outsourced by current blockchain privacy research - why do researchers want to apply Tor?

Mikerah: Tor is the largest anonymizing network we have today on the Internet. You usually access it with the Tor browser. It's effectively a way to do anonymous TCP requests.

Q: The authors indicated that if we use Tor as a solution for blockchain privacy, there's a risk of deanonymization attacks. What is a deanonymization atrack? Is it something that Ethereum blockchain network is currently experiencing? Any examples that would help illustrate this specific security issue?

Mikerah: There's a [paper](https://ieeexplore.ieee.org/document/7163022) called why Bitcoin over Tor isn't a good idea. The ideas in that paper pretty much apply to Ethereum. The big problem with using Tor is the potential censorship issues. As Tor is well-known for some nefarious activities, certain organizations block Tor traffic completely. If you run Ethereum traffic over Tor traffic, then now Ethereum traffic can also get blocked. That's one of the many problems with using Tor with Ethereum.

Q: Cryotographic primitive called [Private Information Retrieval](https://en.wikipedia.org/wiki/Private_information_retrieval) (PIR) discussed in the paper, which PIR techniques are most applicable to Ethereum network? What is the attitude of Ethereum researchers today in terms of applying PIR-based privacy solutions to Ethereum network?

Mikerah: I think IT-PIR (information theoretic private information retrieval) is the most applicable to Ethereum, today. The attitude of ETH researchers today (honestly mainly Vitalik, I haven't heard the others talk about this) is that it's too inefficient. That's kind of true but there are techniques that make it practical though. Disclaimer: I'm working on projects that aim to solve both of these issues. Check out https://github.com/hashcloak/Meson and https://github.com/hashcloak/go-baryon.


