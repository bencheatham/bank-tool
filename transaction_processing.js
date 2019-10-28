module.exports = function getBalanceByCategoryInPeriod (transactions = [], category, start, end) {
  if (!transactions.length) return 0

  return transactions
    .filter(transaction =>
      new Date(transaction.time) >= start
      && new Date(transaction.time) < end
      && transaction.category === category
    )
    .reduce((accum, transaction) => {
      return accum + transaction.amount
    }, 0)

}