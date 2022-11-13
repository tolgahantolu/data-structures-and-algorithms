const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midIndex = Math.trunc(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr)); // recursive func
}

console.log(mergeSort([89, 31, 49, 54, 106, 359, 10, 98, 358, 224, 4, 15]));
