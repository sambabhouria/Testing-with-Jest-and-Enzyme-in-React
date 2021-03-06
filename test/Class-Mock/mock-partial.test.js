import { BasicMath } from '../../src/components/BasicMath';
import { ComplexMath } from '../../src/components/ComplexMath';

// Mock partially
jest.mock('../../src/components/BasicMath', () => ({
  BasicMath: function() {
    return {
      sum: () => 8,
      divide: jest.requireActual('../../src/components/BasicMath').BasicMath.prototype.divide,
    };
  },
}));

describe('ComplexMath:class partial mock', () => {
  test('should return result based on mock sum without mocking everything', () => {
    // Can also spy the class function
    // const spy = jest
    //   .spyOn(BasicMath.prototype, 'sum')
    //   .mockImplementation(() => 8)

    const complexMath = new ComplexMath();

    expect(complexMath.avg(1, 1)).toEqual(4); // sum is mocked
    // spy.mockRestore();
  });

  test('should be able to see sum is mocked and divide is not', () => {
    // const { BasicMath: ActualBasicMath } = jest.requireActual('../../src/components/BasicMath');
    const basicMath = new BasicMath();

    // sum is mocked
    expect(basicMath.sum(1, 1)).toEqual(8);

    // divide not mocked
    expect(basicMath.divide(10, 2)).toEqual(5);
  });
});
