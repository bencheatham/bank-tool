const assert = require('assert')

const { test, describe } = require('./test')
const transactions = require('./test_cases')
const getBalanceByCategoryInPeriod = require('./transaction_processing')


describe("getBalanceByCategoryInPeriod()", function() {
  test("returns 0 if there are no transactions", () => {

    const runForZeroTransactions = getBalanceByCategoryInPeriod(
      [],
      "groceries",
      new Date("2018-03-01"),
      new Date("2018-03-31")
    )

    assert(runForZeroTransactions === 0, "with 0 transactions the sum is 0")
  })

  // add your tests here
})