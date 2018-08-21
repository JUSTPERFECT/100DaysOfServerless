'use strict';

module.exports.hello = (event, context, callback) => {
  let name = "stranger"
  if(event.queryStringParameters && event.queryStringParameters.name){
    name = event.queryStringParameters.name;
  } 
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}`
    }),
  };

  callback(null, response);
};
