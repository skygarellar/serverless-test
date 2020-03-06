'use strict';

const {
  TeamsStaticContentGenerator
} = require('reactdomserver-test/lib');

module.exports.test = async event => {
  let data;
  try {
    data = await TeamsStaticContentGenerator.get({
      competition: 21
    });
    console.log(data);
  } catch (error) {
    data = error;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data,
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};