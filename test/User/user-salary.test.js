// __tests__/user-test.js
import * as user from './user-salary';


jest.mock('./uesr-request');

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserSalary(4).then(data => expect(data).toEqual(5000));
});
