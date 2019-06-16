//O(n²) - average, worst
//O(n) - best

// good for almost sorted arrays

// FORx2 forward
// Runtime: 2700 ms, Memory Usage: 42.2 MB
const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1); // start, delete count, item
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
};

// FORx2 backward
// Runtime: 660 ms, Memory Usage: 40.4 MB
const insertionSortSecond = nums => {
  for (let i = 0; i < nums.length; i++) {
    var value = nums[i];
    for (let j = i - 1; j > -1 && value < nums[j]; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = value;
  }
  return nums;
};
