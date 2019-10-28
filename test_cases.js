module.exports = transactions = [
  { id: 1, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -30, category: 'eating_out', time: '2019-10-25T15:01:20.308Z'
  },
  { id: 2, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: 10000, category: 'salary', time: '2019-10-25T08:57:06.111Z'
  },
  { id: 3, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -30, category: 'eating_out', time: '2019-10-27T03:06:09.561Z'
  },
  { id: 4, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: 10000, category: 'salary', time: '2019-10-27T05:44:15.348Z'
  },
  { id: 5, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -30, category: 'eating_out', time: '2019-10-26T14:54:07.202Z'
  },
  //here the break to valid dates
  { id: 6, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: 10000, category: 'salary', time: '2019-10-27T09:30:15.314Z'
  },
  { id: 7, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: -100, category: 'groceries', time: '2019-10-27T18:32:55.195Z'
  },
  { id: 8, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -80.10, category: 'groceries', time: '2019-10-27T17:47:14.407Z'
  },
  { id: 9, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: -100.15, category: 'groceries', time: '2019-10-27T15:07:06.022Z'
  },
  { id: 10, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -30.50, category: 'groceries', time: '2019-10-27T15:19:51.042Z'
  },
  { id: 11, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: -200, category: 'groceries', time: '2019-10-27T08:45:39.949Z'
  },
  { id: 12, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
  amount: -30, category: 'eating_out', time: '2019-10-27T12:54:03.944Z'
  },
  { id: 13, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: 10000, category: 'salary', time: '2019-10-27T19:31:26.729Z'
  },
  { id: 14, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -30, category: 'eating_out', time: '2019-10-27T08:06:24.115Z'
  },
  { id: 15, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: 10000, category: 'salary', time: '2019-10-28T02:00:18.903Z'
  },

  // here's the start of the invalid right ranges
  { id: 16, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -30, category: 'eating_out', time: '2019-10-28T09:38:23.647Z'
  },
  { id: 17, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: 10000, category: 'salary', time: '2019-10-29T04:23:51.980Z'
  },
  { id: 18, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: -100, category: 'groceries', time: '2019-10-30T06:32:00.669Z'
  },
  { id: 19, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
    amount: -80.10, category: 'groceries', time: '2019-10-29T04:45:07.827Z'
  },
  { id: 20, sourceAccount: 'the_company', targetAccount: 'my_account',
    amount: -100.15, category: 'groceries', time: '2019-10-28T21:22:31.514Z'
  },
]


// Generated Dates from Utils File:
//  {
//   leftOutOfBoundsDates: [
//     2019-10-25T15:01:20.308Z,
//     2019-10-25T08:57:06.111Z,
//     2019-10-27T03:06:09.561Z,
//     2019-10-27T05:44:15.348Z,
//     2019-10-26T14:54:07.202Z
//   ],
//   rightOutOfBoundsDates: [
//     2019-10-28T09:38:23.647Z,
//     2019-10-29T04:23:51.980Z,
//     2019-10-30T06:32:00.669Z,
//     2019-10-29T04:45:07.827Z,
//     2019-10-28T21:22:31.514Z
//   ],
//   inboundDates: [
//     2019-10-27T09:30:15.314Z,
//     2019-10-27T18:32:55.195Z,
//     2019-10-27T17:47:14.407Z,
//     2019-10-27T15:07:06.022Z,
//     2019-10-27T15:19:51.042Z,
//     2019-10-27T08:45:39.949Z,
//     2019-10-27T12:54:03.944Z,
//     2019-10-27T19:31:26.729Z,
//     2019-10-27T08:06:24.115Z,
//     2019-10-28T02:00:18.903Z
//   ]
// }