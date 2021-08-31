/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = nums => {
    for (let x in nums) {
        if (nums[x] >= 1 && nums[x] <= 100) {
            if (nums[x] % 2 === 0) {
                nums[x] *= 2;
            } else {
                nums[x] *= 3;
            }
        }
    }
    return nums;
}