const arrSum = arr => {
  let result;
  if (arr.filter(c => !isNaN(parseInt(c)))) return NaN;
  if (arr.length === 1) result += arr[0];
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
