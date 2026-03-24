/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysDivByK = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
 map.set(0, 1); // important

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        let remainder = sum % k;

        // handle negative remainder
        if (remainder < 0) {
            remainder += k;
        }

        if(map.has(remainder)){
            count += map.get(remainder);
        }

        map.set(remainder, (map.get(remainder) || 0) + 1);
    }

    return count;
};