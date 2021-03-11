// __mocks__/request.js
const users = {
    4: {name: 'Mark', salary: 5000},
    5: {name: 'Paul', salary: 10000},
  };

  export default function request(url) {
    return new Promise((resolve, reject) => {
      const userID = parseInt(url.substr('/users/'.length), 10);
      process.nextTick(() =>
        users[userID]
          ? resolve(users[userID])
          : reject({
              error: 'User with ' + userID + ' not found.',
            }),
      );
    });
  }
