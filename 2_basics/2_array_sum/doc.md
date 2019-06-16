## ARRAY SUM

- JS method -> reduce
  [array].reduce((a, b) => a + b, 0);

[read more](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce)

### implementation steps

- pass an array
- initialize result which is equal 0 (or other number which will be a start value)
- go through all elements of the array and add their value to the result

### implementation requirements

- if the values in array argument are not a number or at least one value is not a number, function will return NaN
- if the array length is equal 1, don't iterate return array value
