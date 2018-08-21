'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Created this function along with S3 bucket!!',
      input: event,
    }),
  };

  callback(null, response);
};
