import { requestToGoogle } from './getData';

// If we want the real request module
// jest.unmock('request');

// Automatically uses mock in __mocks__/request.js
describe('Mock npm module', () => {
  test('should use mocked request', async () => {
    const result = await requestToGoogle();
    expect(result).toEqual('fake result');
  });
});
