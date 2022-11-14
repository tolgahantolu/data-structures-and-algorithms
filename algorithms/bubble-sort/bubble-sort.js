function bubbleSort(arr) {
  const array = arr.slice();
  for (let i = 0; i < array.length; i++) {
    for (let k = 1; k < array.length - i; k++) {
      if (array[k] < array[k - 1]) {
        //const temp = array[k];
        //array[k] = array[k - 1];
        //array[k - 1] = temp;

        [array[k], array[k - 1]] = [array[k - 1], array[k]];
      }
    }
  }

  console.log(arr);
  console.log(array);
  return array;
}

bubbleSort([84, 11, 65, 27, 4, 23, 10, 11, 47, 27, 4]);
