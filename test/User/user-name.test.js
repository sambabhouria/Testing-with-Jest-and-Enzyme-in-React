// __tests__/user-test.js
import * as user from './user-name';
jest.mock('./uesr-request');

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});
