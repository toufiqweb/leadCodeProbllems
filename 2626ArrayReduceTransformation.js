var reduce = function (nums, fn, init) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {


    if (nums.length === 0) {
      sum =  fn(init, nums[i])
    } else {
      sum = fn(sum, nums[i]);
    }
  }

  return sum;
};
