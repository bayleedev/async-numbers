## Async Numbers

This is the Browser Team code test! Come forth and test your JavaScript powers!

Getting the test to pass is a good demonstration of your knowledge of JavaScript
and how to interact with async APIs.

To complete the challenge, you need to generate a list of 100 unique numbers.
We provide the API you'll need to generate the numbers, and to validate your
list.

### Run it

To run the example file you can run:

```
node index.js
```

### Use it

To use the `getNumber`:

``` javascript
var getNumber = require('./lib/get-number')

var list = []
getNumber((number) => {
  list.push(number)
})
```

Once you have a list of 100 unique numbers, you can call `check` to validate
your array. For example:

``` javascript
var getNumber = require('./lib/get-number')
var check = require('./lib/check')

var list = []
getNumber((number) => {
  list.push(number)
  check(list) // will throw an exception!
})
```
