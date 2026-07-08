var containsDuplicate = function (nums) {
  let num = new Set();

  for (let n of nums) {
    if (num.has(n)) {
      return true;
    }

    num.add(n);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
