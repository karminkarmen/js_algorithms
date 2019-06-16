const abs = num => {
  if (isNaN(num)) return NaN;
  if (num === null) return 0;
  if (num <= 0) return num * -1;
  return num;
};
