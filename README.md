## Bank Tool Summary
This is a simple tool to sum banking transactions.  The main challenge of this tool is generating meaningful random time series data.

The focus of this repository is creating a script to generate test data that can be used to test this or other similar tools that have time series transactional data.

### Run the script to get the dates
The dates will be output in the terminal when you run `node main.js`

### Test Runner
A goal of this project was to no download / use external dependencies in order to keep it as light and usuable as possible.

Therefore node's `assert` library was used, and a custom basic test runner was created in the `test_runner.js`

To run test, run the following command in the terminal:

`node run.test.js`

That's it!  Happy scripting!