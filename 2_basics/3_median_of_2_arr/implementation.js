const median = (numsSorted1, numsSorted2) => {
  const result = [];
  result.concat(numsSorted1, numsSorted2).sort();
  const medianVal = result[Math.floor(result.length / 2)];
  return medianVal;
};
