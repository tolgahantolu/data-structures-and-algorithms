function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 1; k < arr.length - i; k++) {
      if (arr[k] < arr[k - 1]) {
        const temp = arr[k];
        arr[k] = arr[k - 1];
        arr[k - 1] = temp;
      }
    }
  }

  console.log(arr);
  return arr;
}

bubbleSort([84, 11, 65, 27, 4, 23, 10, 11, 47, 27, 4]);
