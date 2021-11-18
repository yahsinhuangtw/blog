---
title: Using MPC to Help Achieve Blockchain Privacy
date: 2021-11-19 00:37:55
tags:
---
This post answers some of the most commonly asked questions about using multi-party computation (MPC) in blockchains.

## What is MPC?
Multi-party computation (MPC) is a cryptographic protocol that does a joint computation involving multiple parties over their inputs while keeping those inputs private.

A famous example of MPC is [Yao’s Millionaires Problem](https://en.wikipedia.org/wiki/Yao%27s_Millionaires%27_problem). Two millionaires want to know who is richer without finding out information about each other’s actual wealth. Naively they can simply tell their wealth to a third party. Then the third party compares their wealth and lets them know who is richer. But then this option is undesirable because the third party learns the information of their wealth.

The challenge of Yao’s Millionaires Problem is the computation wouldn’t be able to have a result without the two parties’ private information. To get the end result, you need those information involved in the computation. But at the same time, you are not allowed to reveal those private information to the party who performs the computation. That’s the main problem that MPC wants to solve.

## Why it matters in blockchain?
In the real world, not everyone’s a millionaire. Not everybody wishes to compare their assets and wealth with others. In the blockchain space, there’s a need to ensure the inputs are shielded from multiple parties for privacy purposes; hence, the need for MPC protocols.

If we look at the current landscape of the blockchain world, notice there are blockchains doing great for programmability, such as Ethereum blockchain, allowing developers to build great tools and applications on top of them. There are also blockchains doing great for privacy, such as ZCash blockchain, allowing users to send transactions in a privacy-preserving way.

However, there’s a lack of blockchains that are designed for maximum programmability with maximum privacy. That’s why a lot of folks are pushing forward the work on incorporating MPC protocols into blockchain designs.

## Why ZK is not enough?
Zero Knowledge Proofs (ZKP) is great at shielding private information that involves only one party. ZKP alone cannot be applied to provide privacy in multiple-party settings, such as auctions or in the case of Yao’s Millionaires Problem. In those settings, computations would involve private inputs from multiple parties, and so ZKP wouldn’t be enough. We would need to turn to MPC to achieve that.

## Recent developments in MPC

<figure><img src="{% asset_path Miller_Talk_MPC_Blockchain.png %}" /></figure>

In his presentation “MPC as a Blockchain Confidentiality Layer,” Miller gave a high-level overview of how MPC can be viewed as a confidentiality layer for blockchains as illustrated in the slide. Credit: https://youtu.be/0VuBELYfChM

## How does MPC work with blockchains?
[HoneyBadgerMPC](https://github.com/initc3/HoneyBadgerMPC) builds a sidechain that performs MPC protocol computation. The sidechain acts as a confidentiality layer to the public blockchain, where secret data is stored.

## How can developers build MPC applications?
Developers are able to develop MPC applications with Ratel language. Writing Ratel feels very similar to writing Solidity contracts. The compiler compiles Ratel code into two parts: the Ethereum part, and the MPC as a sidechain part. Ratel code looks like this: https://github.com/initc3/HoneyBadgerSwap/blob/coconut/ratel/trade.rl

## Learn more about MPC as a sidechain
One of the biggest news this past month (May, 2021) was you could now play with [HoneyBadgerSwap’s demo website](https://medium.com/initc3org/honeybadgerswap-making-mpc-as-a-sidechain-364bebdb10a5). HoneyBadgerSwap is basically a dark pool version of Uniswap using MPC. You will need some Kovan ETH to test it out. Yunqi Li (UIUC, IC3) made a great Medium story about HoneyBadgerSwap. Read it here: [“HoneyBadgerSwap: Making MPC as a Sidechain,”](https://medium.com/initc3org/honeybadgerswap-making-mpc-as-a-sidechain-364bebdb10a5) published on April 22, 2021.

Watch a really great talk by Andrew Miller [“MPC as a Blockchain Confidentiality Layer,”](https://youtu.be/0VuBELYfChM) presented at the IC3 Blockchain Camp 2020, to understand the HoneyBadgerMPC protocol more. If you are someone who would like to delve into the topic with textbooks, be sure to add the book “A Pragmatic Introduction to Secure Multi-Party Computation” to your reading list. The content is available in [PDF](https://securecomputation.org/docs/pragmaticmpc.pdf).