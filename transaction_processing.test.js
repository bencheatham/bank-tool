const assert = require('assert')

const { test, describe } = require('./test_runner')
const {unsorted_transactions, sorted_transactions} = require('./test_cases')
const getBalanceByCategoryInPeriod = require('./transaction_processing')


describe("getBalanceByCategoryInPeriod() with sorted transactions", function() {
  test("returns 0 if there are no transactions", () => {

    const runForZeroTransactions = getBalanceByCategoryInPeriod(
      [],
      "groceries",
      new Date("2018-03-01"),
      new Date("2018-03-31")
    )

    assert(runForZeroTransactions === 0, "with 0 transactions the sum is 0")
  })

  test("returns 30000 when 30000 deposits made within date range", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      sorted_transactions,
      "salary",
      new Date("2019-10-27T13:39:49.181Z"),
      new Date("2019-10-29T14:17:46.672Z")
    )

    assert(runForTransactions === 30000, "30000 salary when salary input is 30000")
  })

  test("returns -510.75 when -510.75 expenses were incurred within date range", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      sorted_transactions,
      "groceries",
      new Date("2019-10-27T13:39:49.181Z"),
      new Date("2019-10-29T14:17:46.672Z")
    )

    assert(runForTransactions === -510.75, "-510.75 salary when grocery input is -510.75")
  })

  test("includes the start date transactions but not the end date", () => {

    // This is transaction 6 and 15 respectively from the input test data
    // update these dates if the input is updated.
    const firstValidTransactionTime = new Date('2019-10-27T18:26:18.578Z')
    const lastValidTransactionTime = new Date('2019-10-28T11:18:15.064Z')

    const runForTransactions = getBalanceByCategoryInPeriod(
      sorted_transactions,
      "salary",
      new Date(firstValidTransactionTime),
      new Date(lastValidTransactionTime)
    )

    assert(runForTransactions === 20000, "20000 salary when grocery input is 20000")
  })

  test("returns 0 where there are no transactions for a category", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      sorted_transactions,
      "entertainment",
      new Date("2019-10-27T09:30:15.314Z"),
      new Date("2019-10-28T02:00:18.903Z")
    )

    assert(runForTransactions === 0, "0 when the category is entertainment")
  })
})


describe("getBalanceByCategoryInPeriod() with unsorted transactions", function() {
  test("returns 0 if there are no transactions", () => {

    const runForZeroTransactions = getBalanceByCategoryInPeriod(
      [],
      "groceries",
      new Date("2018-03-01"),
      new Date("2018-03-31")
    )

    assert(runForZeroTransactions === 0, "with 0 transactions the sum is 0")
  })

  test("returns 30000 when 30000 deposits made within date range", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      unsorted_transactions,
      "salary",
      new Date("2019-10-27T13:39:49.181Z"),
      new Date("2019-10-29T14:17:46.672Z")
    )

    assert(runForTransactions === 30000, "30000 salary when salary input is 30000")
  })

  test("returns -510.75 when -510.75 expenses were incurred within date range", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      unsorted_transactions,
      "groceries",
      new Date("2019-10-27T13:39:49.181Z"),
      new Date("2019-10-29T14:17:46.672Z")
    )
    assert(runForTransactions === -510.75, "-510.75 salary when grocery input is -510.75")
  })

  test("includes the start date transactions but not the end date", () => {

    // This is transaction 6 and 15 respectively from the input test data
    // update these dates if the input is updated.
    const firstValidTransactionTime = new Date('2019-10-27T18:26:18.578Z')
    const lastValidTransactionTime = new Date('2019-10-28T11:18:15.064Z')

    const runForTransactions = getBalanceByCategoryInPeriod(
      unsorted_transactions,
      "salary",
      new Date(firstValidTransactionTime),
      new Date(lastValidTransactionTime)
    )

    assert(runForTransactions === 20000, "20000 salary when grocery input is 20000")
  })

  test("returns 0 where there are no transactions for a category", () => {

    const runForTransactions = getBalanceByCategoryInPeriod(
      unsorted_transactions,
      "entertainment",
      new Date("2019-10-27T09:30:15.314Z"),
      new Date("2019-10-28T02:00:18.903Z")
    )

    assert(runForTransactions === 0, "0 when the category is entertainment")
  })
})