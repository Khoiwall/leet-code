/**
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    

    Example 1:

    Input: nums = [3,2,3]
    Output: 3
    Example 2:

    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
    

    Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
*/
function majorityElement(nums: number[]): number {
  let element = nums[0];
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    if (max == 0) {
      element = nums[i];
      max = 1;
    } else if (element == nums[i]) {
      max++;
    } else {
      max--;
    }
  }
  return element;
}
