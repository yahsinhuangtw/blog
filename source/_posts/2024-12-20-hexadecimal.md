---
title: Hexadecimal in Ethereum
date: 2024-12-20 17:34:45
tags: [hexadecimal, decimal, convert, number systems, ethereum, EVM opcodes]
---

Writer's Note: This article was rewritten, further edited, and partially translated from one of my 30 published articles from September and October 2024. These articles were created as part of a consecutive 30-day technology writing challenge on one of Taiwan's most popular web2 media platforms. The original articles were written in Traditional Chinese. Here’s a link to one article that serves as the primary source for this piece: (https://ithelp.ithome.com.tw/articles/10355761).

### Hexadecimal in EVM Opcodes
Hexadecimal representation is essential to the Ethereum Virtual Machine (EVM) and its opcode operations. As a base-16 system, it is crucial for the functionality of Ethereum. Understanding how hexadecimal is applied in EVM opcodes is important for developers working with smart contracts and anyone interested in the Ethereum blockchain.

Unfortunately, many learning materials and resources do not cover this topic in depth, often assuming that students have already mastered it through their previous education. This can leave gaps in understanding, especially for those without a strong computer science background.

In this article, I will guide you through converting between number systems, particularly for those who find these concepts challenging. I’ll show you how to perform these conversions using pen and paper, emphasizing both the importance of hexadecimal and its practical applications. This exploration will clarify its significance in Ethereum addresses and opcodes, making it relevant for developers and users alike.

### Conversion Between Number Systems
Hexadecimal uses the symbols 0 to 9 to represent values from 0 to 9, and A to F to represent values from 10 to 15, encompassing a total of sixteen combinations. This format is particularly useful because large numbers in data representation can be expressed using fewer digits.

Understanding how to convert between decimal and hexadecimal is crucial for working with EVM opcodes. For example, hexadecimal 0A corresponds to decimal 10, while hexadecimal 14 converts to decimal 20.

EVM opcodes are expressed in hexadecimal format. The primary reason for using hexadecimal is that computers operate at a low level using binary. When written out, binary data appears as long sequences of 0s and 1s, such as 010101. Each byte consists of 8 bits, meaning it can contain 8 zeros or ones (for example, 01010101).

This binary representation can be tedious for people to comprehend. In contrast, hexadecimal allows us to represent one byte with just two digits (for example, FF), significantly reducing the difficulty of reading and understanding binary data.

### Hexadecimal to Decimal: Example - FA
How do you convert the hexadecimal number FA to its decimal representation?
The digit A represents 10 in decimal.
The digit F represents 15 in decimal.

What digit is in the ones place?
A is in the ones place, meaning 10 is in the ones place.

What digit is in the sixteens place?
F is in the sixteens place, meaning 15 is in the sixteens place.

### What is the value of A?
The rightmost digit (A) is in the ones position.
The value of A is calculated as: 
10 x ones = 10

10 x 1 = 10

### What is the value of F?
The left digit (F) is in the sixteens position.
The value of F is calculated as: 
15 x sixteens = 240

15 x 16 = 240

To find the total value of FA, add the value of F (240) and the value of A (10):

240 + 10 = 250.

Calculation Breakdown:
{% katex %}
15 \times 16^1 + 10 \times 16^0 = 15 \times 16 + 10 \times 1 = 240 + 10 = 250
{% endkatex %}

Thus, the decimal equivalent of the hexadecimal number FA is 250.

### Hexadecimal to Decimal: Example - 14
The number we will convert in the opcode operation example is hexadecimal 14, so we will use it as our example. The number 14 is read as "one, four" because the second digit, 1, does not represent 10. Therefore, reading it as "fourteen" can easily lead to confusion.

Now, let's perform the conversion. The first digit is the base 16 raised to the power of 0, multiplied by 4. The second digit is base 16 raised to the power of 1, multiplied by 1. After performing the multiplications, we add the results:
4×1=4
1×16=16

Adding these together gives us:
4+16=20

Thus, hexadecimal 14 converts to decimal 20.

### Hexadecimal to Decimal: Example - 0A
A complete byte requires two hexadecimal digits. Therefore, when you see PUSH1 written as 0A on the interface, it represents hexadecimal 0A, which is equal to decimal 10. This notation is not incorrect; it is simply due to its representation in hexadecimal format.

The 0 in 0A serves as a placeholder, while the hexadecimal digit A represents decimal 10. Essentially, when you see 0A, you should understand it as being equivalent to 10.
