function insertionSort(arr) {
  const array = arr.slice();
  for (let i = 1; i < array.length; i++) {
    for (let k = i; k > 0; k--) {
      if (array[k] < array[k - 1]) {
        //const tempo = array[k];
        //array[k] = array[k - 1];
        //array[k - 1] = tempo;
        [array[k], array[k - 1]] = [array[k - 1], array[k]];
      } else {
        break;
      }
    }
  }
  console.log(arr);
  console.log(array);
  return array;
}

insertionSort([65, 27, 13, 23, 10]);
