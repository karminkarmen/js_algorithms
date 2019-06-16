// O(n²) - average, worst
// O(n) - best

// not useful
// slow

// DO WHILE
//Runtime: 7220 ms, Memory Usage: 38.8 MB
const bubbleSort = nums => {
  do {
    var swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
};

// 2xFOR
// Runtime: 5036 ms, Memory Usage: 40.6 MB
const bubbleSortSecond = nums => {
  var swapped = false;
  for (let i = 0; i < nums.length; i++) {
    swapped = false;
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
  }
  return nums;
};
