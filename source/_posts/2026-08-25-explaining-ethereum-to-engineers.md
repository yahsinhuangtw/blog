---
title: Explaining Ethereum Blockchain to Engineers Unfamiliar with the Technical Aspects of Blockchain
tags:
  - Ethereum
  - Blockchain
  - Smart Contracts
date: 2026-08-25 00:00:00
---

In August, I had the chance to hang out with a group of web developers and engineers, mostly people who write Ruby, Python, C, or Golang, with deep knowledge of web applications, databases, and operating systems in general (particularly Linux, with experience in distros like NixOS, Fedora, and Arch Linux). But they weren't so familiar with the Ethereum blockchain project, and they were quite skeptical of it. So the challenge was explaining it in a simple way that would actually resonate with people who already think like systems engineers. Here's roughly how I approached it.

### Blockchain has a different architecture than the Web2 client-server model

Blockchain is a peer-to-peer system. If you're coming from a database background, you can think of the blockchain as one big shared database. Peers in the network keep their copies of that data in sync through what's called a consensus mechanism.

### How do you modify or change the data? That's where smart contracts come in

Smart contracts are programs, software programs, not legal contracts. They're written in Solidity (similar to JavaScript in syntax) and compiled down to EVM bytecode. You could think of them as stored procedures in a database, a program that rules how the data can be changed or updated.

Take USDC as an example. The USDC token is managed by a smart contract. That contract defines a key-value map of account addresses to their corresponding balances. A transfer function is defined on the contract, and it makes sure a sender can only submit valid transactions, rejecting a transfer if the value sent exceeds the sender's balance.

### But how does a user actually send their USDC?

They send it through a wallet app. A "transaction" in blockchain terms is just signed data broadcast through the peer-to-peer network. Ideally, users would run their own full nodes to send transactions directly. But that stopped being realistic for most people around 2016. Today, most wallets connect to an RPC (Remote Procedure Call) provider, a third party, which helps broadcast the transaction into the P2P network on the user's behalf.

### Closing thoughts

I'm usually not the person explaining these technical aspects in detail, so I still have work to do on it. I took this conversation as a good challenge, a chance to practice articulating things in a way that would make the most sense to engineers. It's a complex project, and it tends to prompt a lot of questions. Sometimes even I am skeptical, so it's totally understandable. I think 98 percent of cryptocurrency-related content out there isn't so legitimate, and so the small minority who actually understand the technical side need to work on communicating it better to the general software engineers, web developers, and systems engineers.
