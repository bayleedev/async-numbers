module.exports = function getNumber (cb) {
  setTimeout(function () {
    cb(Math.floor(Math.random() * 100))
  }, Math.random() * 1000)
}
