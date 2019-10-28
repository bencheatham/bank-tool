/**
 * Test module.
 * @module test
 */

module.exports = {
  test: (description, cb) => {
    console.log("")
    try {
      cb()
      console.log('\x1b[36m%s\x1b[1m', `  Passed: ${description}`)
    } catch(err) {
      console.log('\x1b[31m%s\x1b[1m', `  Failed: ${description}`)
      console.log('\x1b[31m%s\x1b[1m', `     Message: ${err.message}`)
      console.log(`     Expected: ${err.expected}`)
      console.log(`     Received: ${err.actual}`)
      console.log("")
    }
  },
  describe: (description, cb) => {
    console.log("")
    console.log('\x1b[33m%s\x1b[1m', `Describe: ${description}`)
    try {
      cb()
    } catch(err) {

    }
  }
}