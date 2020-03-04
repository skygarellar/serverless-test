'use strict';

const { TeamsStaticContentGenerator } = require('reactdomserver-test/build');

module.exports.test = async event => {

  const data = await TeamsStaticContentGenerator.get({competition: 21});
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
