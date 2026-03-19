/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    let map = new Map();
    map.set(0, -1);

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        let remainder = sum % k;

        if(map.has(remainder)){
            if(i - map.get(remainder) >= 2){
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }

    return false;
};