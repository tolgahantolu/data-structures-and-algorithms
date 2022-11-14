function selectionSort(arr) {
  const array = arr.slice();

  for (let i = 0; i < array.length - 1; i++) {
    let min = i; //assume
    for (let k = i + 1; k < array.length; k++) {
      if (array[k] < array[min]) {
        min = k;
      }
    }
    //const temp = array[i];
    //array[i] = array[min];
    //array[min] = temp;

    [array[i], array[min]] = [array[min], array[i]];
  }

  console.log(arr);
  console.log(array);
  return array;
}

selectionSort([84, 11, 41, 27, 44, 23, 10, 98, 47, 27, 4]);
