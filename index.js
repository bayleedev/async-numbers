var getNumber = require('./lib/get-number')
var check = require('./lib/check')

var list = []
getNumber((number) => {
  list.push(number)
  check(list) // will throw an exception!
})

