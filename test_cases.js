module.exports = function getTransactionData() {
  return {
    unsorted_transactions: [
      { id: 1, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-27T07:19:02.743Z'
      },
      { id: 2, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-26T23:44:14.946Z'
      },
      { id: 3, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-27T11:39:49.181Z'
      },
      { id: 4, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-25T18:49:19.532Z'
      },
      { id: 5, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-26T11:32:53.454Z'
      },

      //here is the break to valid dates
      { id: 6, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-28T11:18:15.064Z'
      },
      { id: 7, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100, category: 'groceries', time: '2019-10-28T02:42:29.623Z'
      },
      { id: 8, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -80.10, category: 'groceries', time: '2019-10-27T20:53:51.210Z'
      },
      { id: 9, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100.15, category: 'groceries', time: '2019-10-28T02:14:12.915Z'
      },
      { id: 10, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30.50, category: 'groceries', time: '2019-10-28T02:44:03.837Z'
      },
      { id: 11, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -200, category: 'groceries', time: '2019-10-28T01:08:46.858Z'
      },
      { id: 12, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
      amount: -30, category: 'eating_out', time: '2019-10-28T10:07:45.209Z'
      },
      { id: 13, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-28T01:09:55.101Z'
      },
      { id: 14, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-28T05:15:16.886Z'
      },
      { id: 15, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-27T18:26:18.578Z'
      },

      // here's the start of the invalid right ranges
      { id: 16, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-30T03:31:32.998Z'
      },
      { id: 17, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-29T15:29:38.046Z'
      },
      { id: 18, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100, category: 'groceries', time: '2019-10-30T10:38:34.120Z'
      },
      { id: 19, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -80.10, category: 'groceries', time: '2019-10-29T15:17:46.672Z'
      },
      { id: 20, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100.15, category: 'groceries', time: '2019-10-29T23:19:45.819Z'
      },
    ],
    sorted_transactions: [
      { id: 1, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-25T18:49:19.532Z'
      },
      { id: 2, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-26T11:32:53.454Z'
      },
      { id: 3, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-26T23:44:14.946Z'
      },
      { id: 4, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '019-10-27T07:19:02.743Z'
      },
      { id: 5, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-27T11:39:49.181Z'
      },

      //here the break to valid dates
      { id: 6, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-27T18:26:18.578Z'
      },
      { id: 7, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100, category: 'groceries', time: '2019-10-27T20:53:51.210Z'
      },
      { id: 8, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -80.10, category: 'groceries', time: '2019-10-28T01:08:46.858Z'
      },
      { id: 9, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100.15, category: 'groceries', time: '2019-10-28T01:09:55.101Z'
      },
      { id: 10, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30.50, category: 'groceries', time: '2019-10-28T02:14:12.915Z'
      },
      { id: 11, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -200, category: 'groceries', time: '2019-10-28T02:42:29.623Z'
      },
      { id: 12, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
      amount: -30, category: 'eating_out', time: '2019-10-28T02:44:03.837Z'
      },
      { id: 13, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-28T05:15:16.886Z'
      },
      { id: 14, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '2019-10-28T10:07:45.209Z'
      },
      { id: 15, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-28T11:18:15.064Z'
      },

      // here's the start of the invalid right ranges
      { id: 16, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -30, category: 'eating_out', time: '019-10-29T15:17:46.672Z'
      },
      { id: 17, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: 10000, category: 'salary', time: '2019-10-29T15:29:38.046Z'
      },
      { id: 18, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100, category: 'groceries', time: '2019-10-29T23:19:45.819Z'
      },
      { id: 19, sourceAccount: 'my_account', targetAccount: 'coffee_shop',
        amount: -80.10, category: 'groceries', time: '2019-10-30T03:31:32.998Z'
      },
      { id: 20, sourceAccount: 'the_company', targetAccount: 'my_account',
        amount: -100.15, category: 'groceries', time: '2019-10-30T10:38:34.120Z'
      },
    ]
  }
}

// Generated Sorted Dates from Utils File:
// {
//   leftOutOfBoundsDates: [
//     2019-10-25T18:49:19.532Z,
//     2019-10-26T11:32:53.454Z,
//     2019-10-26T23:44:14.946Z,
//     2019-10-27T07:19:02.743Z,
//     2019-10-27T11:39:49.181Z
//   ],
//   rightOutOfBoundsDates: [
//     2019-10-29T15:17:46.672Z,
//     2019-10-29T15:29:38.046Z,
//     2019-10-29T23:19:45.819Z,
//     2019-10-30T03:31:32.998Z,
//     2019-10-30T10:38:34.120Z
//   ],
//   inboundDates: [
//     2019-10-27T18:26:18.578Z,
//     2019-10-27T20:53:51.210Z,
//     2019-10-28T01:08:46.858Z,
//     2019-10-28T01:09:55.101Z,
//     2019-10-28T02:14:12.915Z,
//     2019-10-28T02:42:29.623Z,
//     2019-10-28T02:44:03.837Z,
//     2019-10-28T05:15:16.886Z,
//     2019-10-28T10:07:45.209Z,
//     2019-10-28T11:18:15.064Z
//   ]
// }
