function rotate(nums, k) {
  const index = k > nums?.length ? k % nums?.length : k;
  const arrRight = nums.slice(nums.length - index, nums.length);
  const arrLeft = nums.slice(0, nums.length - index);
  for (let i = 0; i < arrRight.length; i++) {
    nums[i] = arrRight[i];
  }
  for (let i = 0; i < arrLeft.length; i++) {
    nums[arrRight?.length + i] = arrLeft[i];
  }
  console.log(nums);
}
rotate([1, 2, 3], 4);
