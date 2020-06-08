---
title: Highlights from Devcon Osaka Side Event “L2 and Business”
date: 2019-10-29 00:21:03
tags:
---


<figure>{% asset_img devcon_l2_feature.jpeg %}<figcaption>On Tuesday, October 8 Cryptoeconomics Lab organized a local meetup event “L2 and Business” during Devcon 5 in Osaka, Japan. Photo: Cryptoeconomics Lab</figcaption></figure>


On Tuesday, October 8 [Cryptoeconomics Lab](https://www.cryptoeconomicslab.com/) organized a local meetup [event](https://www.eventbrite.com/e/layer2-and-business-with-protocol-researchers-and-devs--tickets-74235734079) “L2 and Business” during [Devcon 5](https://devcon.org/) in Osaka, Japan. The event was supported by several local communities including [New Economy (あたらしい経済)](https://www.neweconomy.jp/) media, [NodeTokyo](https://nodetokyo.jp/), and [LayerX](https://medium.com/@layerx). The 2-hour meetup attracted more than 60 researchers, developers, and community leaders who were excited about Ethereum layer 2 solutions.

Below are some highlights from the event, which was moderated by [Yuriko Nishijima](https://medium.com/@yurikonishijima), the featured panelists were [Georgios Konstantopoulos](https://www.gakonst.com/about/), [Shuhei Hiya](https://medium.com/@syuhei_hiya) of Cryptoeconomics Lab, [Ben Jones](https://twitter.com/ben_chain) of [Plasma Group](https://plasma.group/), [Dan Robinson](https://twitter.com/danrobinson) of [Paradigm](https://twitter.com/paradigm), [Hayden Adams](https://twitter.com/haydenzadams) of [Uniswap](https://uniswap.io/), [Liam Horne](https://lihorne.com/) of [L4](https://l4.ventures/), [John Adler](https://twitter.com/jadler0) of [ConsenSys](https://consensys.net/).

The first panel was moderated by Georgios Konstantopoulos, an independent researcher of the blockchain scaling solutions, with discussions focusing on business and monetization in the blockchain space. Konstantopoulos started the panel discussion by asking what it means to run a blockchain business compared to traditional tech startups.

<figure>{% asset_img 198oE7RK5RvOz9TshGM9u_A.jpeg %}<figcaption>The 2-hour meetup attracted more than 60 researchers, developers, and community leaders who were excited about Ethereum layer 2 solutions. Photo: Cryptoeconomics Lab</figcaption></figure>

Uniswap founder Hayden Adams said before starting a blockchain business he was an engineer with no prior business experience. “But I do think there is value to building decentralized applications. I think there are probably some monetization schemes that can be figured out. We haven’t figured it out a hundred percent yet. But we do feel very confident.” Ben Jones made a comment that the focus is less about making transactions cheaper, but more about providing best UX with larger margin than L1.

Following a panel discussion, Georgios Konstantopoulos gave a brief overview of his recent research work. His [presentation](https://www.gakonst.com/predicates2019.pdf) was titled “Plasma Predicates and Bitcoin Script.” Konstantopoulos introduced an ambitious approach of putting Plasma on the Bitcoin Core (with some protocol update).

He noted that Plasma is usually implemented as a monolithic contract, yet in fact, it can be separated out modularly. This refactoring enabled us to verify the optimistic transactions via the “Plasma Pay to Predicate Hash(P2PH)” which is the application of CREATE2 opcode. In other words, an off-chain contract is to be used to verify the validity of exit tx for a one-time purpose; hence, we might not need global state to build Plasma.

Yuriko Nishijima from Cryptoeconomics Lab, was the moderator for the second panel discussion at the event. “We’re excited to have some of the best researchers and developers of Ethereum layer 2 solutions joining us for a panel discussion. I’ll start off by asking a few questions about different implementations of the layer 2 solutions” said Nishijima in the panel discussion.

Her questions helped stirred up a discussion on how companies are working on similar layer 2 solutions with different approaches. “Will there be a peaceful coexistence between different implementations?” asked Nishijima.

Uniswap founder Hayden Adams responded enthusiastically: “I think there’s definitely room for all of them, for Plasma and for Roll up, for ZK roll up, because they tend to fill different roles. For example, Plasma is the most scalable and can do the most transactions per second. It’s harder to do certain types of applications on it than may be able to do on an optimistic roll up”

“For some reason this is the narrative that maybe they can’t peacefully coexist despite them being pretty separate strategies in a lot of ways. I think that’s just because it’s really hard to build. We’ve been working on it for a long time, and none of them has really taken off yet as a reliable solution for scaling,” said Liam Horne, co-founder of L4. “So, instead we’re saying which one is going to be first, we’ll put them in this race”

“I think eventually they are going to be reliable and we can use them. It would probably take some time because it’s very hard to build,” added Horne.

“Is there a space for multiple groups and projects that are working on the same design pattern? The answer I think is yes, because a lot of these design patterns still aren’t fully fleshed out into what they want to look like, what the properties are, what their features are, what their limitations are potentially, and so on,” said John Adler from ConsenSys.

He commented that he’s happy to see having multiple teams for the same construction, developing and researching at the limits of the different techniques at this stage. “We will have a better understanding of what they can do and what they can’t do, and then after that start building standards for interoperability,” said Adler.

The discussion points that the moderator gave quickly evolved into discussions over whether having standards in the layer 2 infrastructure is a good thing or not.

Ben Jones from the Plasma Group commented that there’s definitely a benefit to have any standards generally. “We’re very fortunate that Plasma Group as a non-profit to be able to put out our ideas in spec form and have multiple teams come implement them. For example, teams like Cryptoeconomics Lab is one of them, Matic also just put out some predicates,” said Jones.

“I’m quite positive that that spec we wrote was not correct, so I’m happy for every single one of those people to be changing it when they realize that we did a very stupid thing or there’s better way to do things. But the important thing is that conceptually because we wrote down these ideas, other people were able to take those ideas and run with them” added Jones.

Several prominent researchers also showed up at the event, including the creator of Ethereum Vitalik Buterin and [Counterfactual](https://www.counterfactual.com/) researcher [Jeff Coleman](https://twitter.com/technocrypto).

The session was concluded with panel moderator encouraging researchers and developers in the community to make contributions to the layer 2 related projects. “We look forward to seeing substantial progress being made in the layer 2 research, and we look forward to further progress in the coming months,” said Nishijima.