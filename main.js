const { buildTestDateList } = require('./utils')

const quantity = 20
const end = new Date()
//this generates a date 48 hours before the end date
const start = new Date(new Date(end).setUTCHours(end.getUTCHours() - 48))

console.log("\nBelow is a set of dates to fill in time series test data, broken into 3 sets.")

console.log("\nThese dates are broken into 3 sets for convenience.")
console.log("\nset 1, leftOutOfBoundsDates, provides dates before the start date")
console.log("set 2, rightOutOfBoundsDates, provides dates after the start date")
console.log("se3, inboundDates, provides dates in the range of of a test sample\n")

console.log(buildTestDateList(quantity, start, end))


