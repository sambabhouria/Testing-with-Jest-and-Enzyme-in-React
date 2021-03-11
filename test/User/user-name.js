// user.js
import request from './uesr-request';

export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}
