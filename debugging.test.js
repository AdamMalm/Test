const assert = require("assert");
const { twoSum } = require("./debugging");

describe("twoSum", function () {
  it("should return [0,1] when given [2,7,11,15] and 9", function () {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const actual = twoSum(nums, target);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return [1,2] when given [3,2,4] and 6", function () {
    const nums = [3, 2, 4];
    const target = 6;
    const expected = [1, 2];
    const actual = twoSum(nums, target);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return [0,1] when given [3,3] and 6", function () {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];
    const actual = twoSum(nums, target);
    assert.deepStrictEqual(actual, expected);
  });

  it("should throw an error when no solution is found", function () {
    const nums = [1, 2, 3];
    const target = 7;
    assert.throws(() => twoSum(nums, target), Error);
  });
});
