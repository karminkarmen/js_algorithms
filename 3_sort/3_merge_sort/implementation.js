// O(n log(n)) - best, average, worsrt CONSTANT!

// very useful
// often implemented under the hood
// recursive
// super consistent
// stable

const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);

  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  results.concat(left, right);
  // [...results, ...left, ...right];
  return result;
};
