/**
 * Utils module.
 * @module utils
 */


/**
 * @function randomDate Creates a random date between the provided start and end dates.
 * @param {Date} start - The first possible date for the random list list.
 * @param {Date} end - The last possible date for the random date list.
 * @return {Date} A random date between the start and end dates.
 */
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

/**
 * @function buildRandomDateList builds a list of randomly generated dates between 2 fixed points.
 * @param {Date} start - The first possible date for the random list list.
 * @param {Date} end - The last possible date for the random date list.
 * @return {Date[]} An array of randomonly generated dates between the start and end dates (not necessarily inclusive)
 */
function buildRandomDateList(quantity, start, end) {
  return new Array(quantity).fill(null).map(item => randomDate(start, end))
}

/**
 * @function buildTestDateList builds a list of testable dates, including dates within
 * a valid test range and dates before and after the valid test ranges
 * @param {Date} start - The first possible date for the random list list.
 * @param {Date} end - The last possible date for the random date list.
 * @return {Date[]} An array of randomonly generated dates between the start and end dates (not necessarily inclusive)
 */
function buildTestDateList(quantity, start, end) {
  const quater = Math.floor(quantity/4)
  const half = Math.floor(quantity/2)

  const leftOutOfBoundsStart = new Date(new Date(start).setUTCHours(start.getUTCHours() - 48))
  const leftOutOfBoundsDates = buildRandomDateList(quater, leftOutOfBoundsStart, start)

  const rightOutOfBoundsStart = new Date(new Date(end).setUTCHours(start.getUTCHours() + 48))
  const rightOutOfBoundsDates = buildRandomDateList(quater, end, rightOutOfBoundsStart)

  const inboundDates = buildRandomDateList(half, start, end)

  return {
    leftOutOfBoundsDates,
    rightOutOfBoundsDates,
    inboundDates
  }
}

module.exports = {
  randomDate,
  buildRandomDateList,
  buildTestDateList
}