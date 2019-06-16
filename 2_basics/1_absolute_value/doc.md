## ABSOLUTE VALUE

- is the non-negative value of x without regard to its sign
- the absolute value of a number may be thought of as its distance from zero

![alt text][graph]

[read more](https://en.wikipedia.org/wiki/Absolute_value)

- JS method -> Math.abs(number);

[read more](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Math/abs)

[graph]: https://wikimedia.org/api/rest_v1/media/math/render/svg/5ebaee01e9b8c55b7465df71b61a1fe14cfb53e0 'Graphic'

### implementation steps

- pass a number
- check if the argument is a number
  => if NOT => STOP;
  => if YES => CONTINUE;
- check if the argument is higher than 0 or equal 0
  => if NOT => absolute value of argument ( arg \* (-1) )
  => if YES => absolute value of argument ( arg )

### implementation requirements

- if the number argument is positive or negative number, function will return the absolute value
- if the number argument is not a number, function will return NaN
- if the number argument is Null, function return Zero
