## Async Numbers

You need to generate a list of 100 unique numbers from our async number api.

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
