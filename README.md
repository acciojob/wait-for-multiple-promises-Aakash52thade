# Wait for Multiple Promises

In this task, you will create an array of three Promises, each of which resolves after a random time between 1 and 3 seconds. You will use Promise.all to wait for all the Promises to resolve, and then log the array of results. This task requires knowledge of creating Promises and using Promise.all.

## Acceptance Criteria

1. Table is already there for you. You just have to add more rows.
2. Create 3 promises, each of which randomly between 1 and 3 secs.
3. By default, add a row that spans 2 columns with the exact text `Loading...`
4. After all the promises resolve using `Promise.all()`,
   remove the loading text and populate the table with the required values:

- First row should have:

  - first column as `Promise 1`
  - second column as time taken by it to resolve in seconds, for eg. `2`

- Second row should have:

  - first column as `Promise 2`
  - second column as time taken by it to resolve in seconds, for eg. `1`

- Third row should have:

  - first column as `Promise 3`
  - second column as time taken by it to resolve in seconds, for eg. `3`

- Fourth row should have:

  - first column as `Total`
  - second column as time taken to resolve all promises in seconds (should be a decimal number), for eg. `3.006`
