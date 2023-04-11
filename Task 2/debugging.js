/*
In this task, a function that is described in detail below, does not work.

Try to fix the bugs present in the function and get it to pass the 4 tests.

To test the function, run the command "npm test debugging" in the terminal.

          Given an array of integers called "nums" and an integer called "target",
          return indices of the two numbers such that they add up to "target".

          You may assume that each input would have exactly one solution, and you
          may not use the same element twice.

          You can return the answer in any order.

          Example 1:
            Input: nums = [2,7,11,15], target = 9
            Output: [0,1]
            Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

          Example 2:
            Input: nums = [3,2,4], target = 6
            Output: [1,2]

          Example 3:
            Input: nums = [3,3], target = 6
            Output: [0,1]

          Constraints:
            2 <= nums.length <= 104
            -109 <= nums[i] <= 109
            -109 <= target <= 109
            Only one valid answer exists.
*/

function twoSum(nums, target) {
  const map = new Map();
  for (var i = 0; i < nums.length; i++) {
    const complement = target + nums[i];
    if (map.has(complement)) {
      return [map.values(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error("No two sum solution");
}

module.exports = { twoSum };
