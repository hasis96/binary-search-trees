function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // splits the array into two
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let result = [];
  let duplicates = [];

  while (left.length && right.length) {
    // removes and stores dupliactes into a separate array
    if (left[0] === right[0]) {
      duplicates.push(left.shift());
    // finds lower value to add in order
    } if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

export default mergeSort;
