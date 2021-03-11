//Often there are fields in the object you want to snapshot which are generated (like IDs and Dates).
// If you try to snapshot these objects, they will force the snapshot to fail on every run:

// FOR FIRST TEST NOT FAIL BUT AFTER FAIL BECAOUSE TIME CHANGE USER : yarn test -u (for update snapshot)
it('will fail every time', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot();
});

//For these cases, Jest allows providing an asymmetric matcher for any property. 
//These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value:

it('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});
