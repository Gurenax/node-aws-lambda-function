const R = require('ramda')

exports.handler = (event, context, callback) => {
  const response = buildGreeting(event.queryStringParameters)
  callback(null, response)
}

// Best practice to separate functions from handler
const buildGreeting = params => {
  const greet = R.replace('{name}', R.__, 'Hello, {name}!')
  const name = !!params && params.name
  const message = !!name ? greet(name) : greet('World')
  const payload = {
    data: {
      message: message
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(payload)
  }
}
