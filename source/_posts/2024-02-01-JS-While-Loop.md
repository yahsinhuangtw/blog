---
title: JS While Loop
date: 2024-02-01 18:13:35
tags: JavaScript basics
---

This week I learned some stuff about JavaScript basics. Namely, how to create a while loop, following some 15 minutes of SuperSimpleDev’s JS Course video. Video link: JavaScript Full Course - Beginner to Pro - Part 1 https://youtu.be/SBmSRK3feww?si=DrHqPCXH4d6wXoP9 starting from 8:21:19 for JS Arrays and Loops.

           let i = 1;
           while (i <= 5) {
             console.log(i);
             i = i + 1;
           } 

First, create a variable called i, make it equal to 1. Display the variable (i) in the console. If the variable i in round brackets results in true, the loop will keep going.

To create a while loop, what's inside the round brackets, i <= 5, is called the loop condition. The loop body will keep going over and over again, as long as variable (i) is less than or equal to 5.

In other words: 
While i <= 5 this specified condition is true, keep running the code over and over again. Once the condition becomes false, stop the loop, and move on to the next line.

### i++; to increment by 1 
To increment the variable i by 1.

        i = i + 1;

Equivalent to       

            i++; 


