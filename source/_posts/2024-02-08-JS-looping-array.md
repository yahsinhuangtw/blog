---
title: Looping through an Array
date: 2024-02-08 18:56:56
tags: JavaScript basics
---
## Looping through an Array
Looping through an Array
Go through each value of an array one by one
Do something with each value

    const todoList = [
    'make dinner',
    'make coffee',
    'watch youtube'
    ];


    for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
    console.log(value);
    }

Run a loop from 0 to the last index. First value is index 0, second value is index 1, third value is index 2.

## Accumulator Pattern
Problem: We have an array of numbers: [1, 1, 3] How do we calculate the total?

    const nums = [1, 1, 3];
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
    }
    console.log(total);


Accumulator Pattern
Create a variable to store the result.
Loop through this array and update the result.

The accumulator variable 
    let total = 0;

Update the result 
    total += num;

console.log(total); would print 5 in the console.

## Create a copy of the array with each number doubled

Create a copy of the array with each number doubled

    const nums = [1, 1, 3];
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
    }
    console.log(total);


    const numsDoubled = [];

    for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
    }
    console.log(numsDoubled);


We can use different types of values to accumulate the result. In the previous example, the accumulator variable was a number. let total = 0;

In this example, the accumulator variable is an array.
const numsDoubled = [];

Inside the round brackets, create the loop variable
for ( ) { }

Inside the round brackets,
The loop variable 
    let i = 0;

The loop condition 
    i < nums.length;

The increment step 
    i++

Inside the curly brackets, get the number of each index. 
    const num = nums[i];


## The push() method

Update the result. 
To add a value to an array, we can use the method .push()
    numsDoubled.push(num * 2);


console.log(numsDoubled); would output (3) [2, 2, 6]



