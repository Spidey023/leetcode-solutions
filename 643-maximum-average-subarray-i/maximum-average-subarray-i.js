/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let avg=0


    for (let i=0; i<k; i++){
        avg += nums[i]
    }

    let maxAve=avg;

    for(let i=k;i<nums.length; i++){
        avg +=nums[i] - nums[i-k]
        maxAve=Math.max(maxAve,avg) 
    }

    return maxAve/k
}; 