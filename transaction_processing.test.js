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

  test("returns 3000 when 3000 deposits made within date range", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      transactions,
      "salary",
      new Date("2019-10-27T07:30:15.314Z"),
      new Date("2019-10-28T05:00:18.903Z")
    )

    assert(runForTransactions === 30000, "3000 salary when salary input is 3000")
  })

  // add your tests here
})