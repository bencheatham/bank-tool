const assert = require('assert')
const utils = require('./utils')
const { test, describe } = require('./test')


describe("randomDate: test capability of random date generator:", () => {
  const end = new Date()
  const start = new Date(new Date(end).setUTCHours(end.getUTCHours() - 2))
  const date = utils.randomDate(start, end)

  test("A date is created and returned", () => {
    assert(date instanceof Date, "the date value is a date")
  })

  test("The date is between the start and end date", () => {
    assert(date < start && date < end, "the date value is a date")
  })
})

describe("buildRandomDateList", () => {
  const end = new Date()
  const start = new Date(new Date(end).setUTCHours(end.getUTCHours() - 2))
  const dates = utils.buildRandomDateList(10, start, end)

  test("The new array of dates has the right length", () => {
    assert(dates.length === 10, "the dates array has 10 dates in it")
  })

  test("All of the dates are between the start and end dates", () => {
    const datesOutOfRange = dates.filter(date => date > start || date > end)
    assert(datesOutOfRange.length === 0, "there are no dates outside of the provided date range")
  })
})

describe("buildTestDateList", () => {

  describe("buildTestDateList => quantity is 3", () => {
    const end = new Date()
    const start = new Date(new Date(end).setUTCHours(end.getUTCHours() - 24))
    const dates = utils.buildTestDateList(15, start, end)

    test("returns 3 left out of bounds dates when quantity is 15", () => {
      assert(dates.leftOutOfBoundsDates.length === 3, "there are 3 left out of bounds dates")
    })

    test("returns 3 right out of bounds dates when quantity is 15", () => {
      assert(dates.rightOutOfBoundsDates.length === 3, "there are 3 right out of bounds dates")
    })

    test("returns 7 in bounds dates when quantity is 15", () => {
      assert(dates.inboundDates.length === 7, "there are 7 in bounds dates")
    })
  })

  describe("buildTestDateList => quantity is 40", () => {
    const end = new Date()
    const start = new Date(new Date(end).setUTCHours(end.getUTCHours() - 24))
    const dates = utils.buildTestDateList(40, start, end)

    test("returns 10 left out of bounds dates when quantity is 40", () => {
      assert(dates.leftOutOfBoundsDates.length === 10, "there are 10 left out of bounds dates")
    })

    test("returns 10 right out of bounds dates when quantity is 40", () => {
      assert(dates.rightOutOfBoundsDates.length === 10, "there are 10 right out of bounds dates")
    })

    test("returns 20 in bounds dates when quantity is 40", () => {
      assert(dates.inboundDates.length === 20, "there are 20 in bounds dates")
    })
  })

  describe("buildTestDateList => quantity is 0", () => {
    const end = new Date()
    const start = new Date(new Date(end).setUTCHours(end.getUTCHours() - 24))
    const dates = utils.buildTestDateList(0, start, end)

    console.log('here is for the app', utils.buildTestDateList(20, start, end))

    test("returns 0 left out of bounds dates when quantity is 0", () => {
      assert(dates.leftOutOfBoundsDates.length === 0, "there are 0 left out of bounds dates")
    })

    test("returns 0 right out of bounds dates when quantity is 0", () => {
      assert(dates.rightOutOfBoundsDates.length === 0, "there are 0 right out of bounds dates")
    })

    test("returns 0 in bounds dates when quantity is 0", () => {
      assert(dates.inboundDates.length === 0, "there are 0 in bounds dates")
    })
  })
})

