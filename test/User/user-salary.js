// user.js
import request from './uesr-request';

export function getUserSalary(userID) {
  return request('/users/' + userID).then(user => user.salary);
}
