//O(1)
function classNames(className) {
  const classes = ['new-item', 'green-item'];
  if (className) classes.push(className);
  return classes;
}

//O(n)
function find(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
}

//O(n²)
function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}
