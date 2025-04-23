module.exports = function (requestParams, response) {
    if (response.statusCode === 302) {
      console.log(`Redirecting from: ${requestParams.url} to: ${response.headers.location}`);
    }
    return response;
  };
  