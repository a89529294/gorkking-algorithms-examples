"use strict";
function findSmallestNumberIndex(arr) {
    let idx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[idx] > arr[i])
            idx = i;
    }
    return idx;
}
function selectionSort(arr) {
    const sortedArr = [];
    const count = arr.length;
    for (let i = 0; i < count; i++) {
        sortedArr.push(arr.splice(findSmallestNumberIndex(arr), 1)[0]);
    }
    return sortedArr;
}
console.log(selectionSort([4, 9, 0, -100, 999, 9999, 20000, 5, 5]));
