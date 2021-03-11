
import * as user from './user';

//We call jest.mock('../request'); to tell Jest to use our manual mock.
//it expects the return value to be a Promise that is going to be resolved.
//You can chain as many Promises as you like and call expect at any time, as long as you return a Promise at the end.

// jest.mock('./request');

// The assertion for a promise must be returned.
it('works with promises', () => {
  // expect.assertions(1);
  // return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});
