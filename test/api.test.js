var standard = require('../')
var test = require('tape')

test('api: lintFiles', function (t) {
  t.plan(3)
  standard.lintFiles(['mockFile.js'], {
    cwd: 'test'
  }, function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'no semicolons')
  })
})

test('api: lintText', function (t) {
  t.plan(3)
  standard.lintText('console.log("hi there")\n', function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'should have used single quotes')
  })
})