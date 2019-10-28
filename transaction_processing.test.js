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

  test("returns -510.75 when -510.75 expenses were incurred within date range", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      transactions,
      "groceries",
      new Date("2019-10-27T07:30:15.314Z"),
      new Date("2019-10-28T05:00:18.903Z")
    )

    assert(runForTransactions === -510.75, "-510.75 salary when grocery input is -510.75")
  })

  test("includes the start date transactions but not the end date", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      transactions,
      "salary",
      new Date("2019-10-27T09:30:15.314Z"),
      new Date("2019-10-28T02:00:18.903Z")
    )

    assert(runForTransactions === 20000, "20000 salary when grocery input is 20000")
  })

  test("returns 0 where there are no transactions for a category", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      transactions,
      "entertainment",
      new Date("2019-10-27T09:30:15.314Z"),
      new Date("2019-10-28T02:00:18.903Z")
    )

    assert(runForTransactions === 0, "0 when the category is entertainment")
  })
})