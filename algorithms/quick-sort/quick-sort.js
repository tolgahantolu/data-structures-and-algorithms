function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const leftArr = [];
  const rightArr = [];

  for (const el of arr.slice(0, arr.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }

  //  for (let i = 0; i < arr.length - 1; i++) {
  //    if (arr[i] < pivot) {
  //      leftArr.push(arr[i]);
  //    } else {
  //      rightArr.push(arr[i]);
  //    }
  //  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; // Recursion Func!
  //  if (leftArr.length > 0 && rightArr.length > 0) {
  //    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; // Recursion Func!
  //  } else if (leftArr.length > 0) {
  //    return [...quickSort(leftArr), pivot]; // Recursion Func!
  //  } else {
  //    return [pivot, ...quickSort(rightArr)]; // Recursion Func!
  //  }
}

console.log(quickSort([89, 31, 49, 54, 106, 359, 10, 98, 358, 224, 4, 15]));
