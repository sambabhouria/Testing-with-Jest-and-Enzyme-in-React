//In the above implementation, we expect the request.js module to return a promise.
// We chain a call to then to receive the user name
// Now imagine an implementation of request.js that goes to the network and fetches some user data:

const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
