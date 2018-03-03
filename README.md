# Node AWS Lambda Function Basic Boilerplate

This is the basic pattern for a serverless AWS lambda function which can be deployed as a zip file in the AWS lambda console.   
This app uses the `Ramda` library to create a hello world greeting. It is not a requirement to AWS lambda but this shows that npm packages can be used in serverless environments.

## `app.js`
```javascript
const R = require('ramda')

exports.handler = function(event, context, callback) {
  const greet = R.replace('{name}', R.__, 'Hello, {name}!')
  const name = !!event.queryStringParameters && event.queryStringParameters.name
  const message = !!name ? greet(name) : greet('World')
  const payload = {
    data: {
      message: message
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(payload)
  }

  callback(null, response)
}
```

## Install
1. Make sure to `yarn install` since this app uses the Ramda package.

## Deployment to AWS Lambda
1. Zip the contents of this folder (not the folder itself).
2. Go to AWS Lambda Console and crate a new Function
3. Under `Code entry type`, select `Upload a .ZIP file`
4. Save the function
5. Create a test event and save the event
6. Click test and make sure it's working
7. Add the trigger `API Gateway`, configure and save.
8. Copy the `invoke URL` under the API Gateway details
9. Test the URL e.g. https://xxxx.amazonaws.com/zzzz/node-aws-lambda-function?name=Glenn