function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let k = i; k > 0; k--) {
      if (arr[k] < arr[k - 1]) {
        const tempo = arr[k];
        arr[k] = arr[k - 1];
        arr[k - 1] = tempo;
      } else {
        break;
      }
    }
  }
  console.log(arr);
  return arr;
}

insertionSort([65, 27, 13, 23, 10]);
