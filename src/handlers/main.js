/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/
exports.handler = async (event, context) => {
    /* By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller. Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop. AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process. */
    // context.callbackWaitsForEmptyEventLoop = false;
    // Get an instance of our database
    // const db = await connectToDatabase();
    // Make a MongoDB MQL Query to go into the movies collection and return the first 20 movies.
    // const movies = await db.collection("movies");
    // const movies = {
    //   title: casual.city,
    //   summary: casual.description
    // };
    
    const response = {
      statusCode: 200,
      body: JSON.stringify('this is me'),
    };
    return response;
  };