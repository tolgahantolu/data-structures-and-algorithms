function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i; //assume
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[min]) {
        min = k;
      }
    }

    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  console.log(arr);
  return arr;
}

selectionSort([84, 11, 41, 27, 44, 23, 10, 98, 47, 27, 4]);
