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
