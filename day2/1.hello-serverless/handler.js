'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Welcome to serverless framework!',
      input: event,
    }),
  };

  callback(null, response);
};
