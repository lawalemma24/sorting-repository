function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of the sorted subarray that are greater than the current element
      // one position ahead of their current position
      while (j >= 0 && currentElement < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element into the correct position in the sorted subarray
      arr[j + 1] = currentElement;
    }
  }
  
  // Example usage:
  const arr = [64, 34, 25, 12, 22, 11, 90];
  insertionSort(arr);
  console.log("Sorted array:", arr);
  