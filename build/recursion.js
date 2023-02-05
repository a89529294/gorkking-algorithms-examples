"use strict";
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
// using Divide and Conquer
function addUpArray(arr) {
    //base case: one item array or empty array
    if (arr.length === 1)
        return arr[0];
    if (!arr.length)
        return 0;
    //recursive case: get closer to base case
    return arr[0] + addUpArray(arr.slice(1));
}
function countItems(arr) {
    if (arr.length <= 1)
        return arr.length;
    return 1 + countItems(arr.slice(1));
}
function findMax(arr) {
    if (arr.length === 1)
        return arr[0];
    if (arr[0] > findMax(arr.slice(1)))
        return arr[0];
    else
        return findMax(arr.slice(1));
}
function binarySearchRecursion(arr, target) {
    const midIndex = Math.floor(arr.length / 2);
    const midValue = arr[midIndex];
    if (midValue === target)
        return target;
    if (!arr.length)
        return null;
    if (midValue > target)
        return binarySearchRecursion(arr.slice(0, midIndex), target);
    else
        return binarySearchRecursion(arr.slice(midIndex + 1), target);
}
function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const lessThanPivot = [];
    const greaterThanOrEqualToPivot = [];
    for (const num of arr.slice(1)) {
        if (pivot >= num)
            lessThanPivot.push(num);
        else
            greaterThanOrEqualToPivot.push(num);
    }
    return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanOrEqualToPivot)];
}
console.log(quickSort([1, 2, 3, 99, -1]));
