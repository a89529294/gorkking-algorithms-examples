function binarySearch(arr: number[], target: number): number | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] === target) return target;
    else left = mid + 1;
  }

  return null;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3));
console.log(binarySearch([1, 3, 5, 7, 9], -1));
