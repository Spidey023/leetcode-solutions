/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow=0
    for( let fast=1;fast<nums.length;fast++){
        if(nums[slow]!==nums[fast]){
            slow++
            nums[slow]=nums[fast]
        }
    }
    return slow+1
};