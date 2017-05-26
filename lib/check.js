module.exports = function (list) {
  if (list.length !== 100) throw new Error('wrong list length: expected 100 saw ' + list.length)

  list.forEach(function (val, i) {
    if (list.indexOf(val) !== i) throw new Error('list contained ' + val + ' more than once')
  })

  console.log('list was valid')
}
