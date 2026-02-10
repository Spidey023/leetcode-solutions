/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let curSum=0
    let start=0
    let minLen=Infinity

  for(let i=0; i<nums.length; i++){
    curSum+=nums[i]
 
    while(curSum>=target){
        minLen=Math.min(minLen,i-start+1)
        curSum-=nums[start]
        start++
    }

  }  
  return minLen=== Infinity?0:minLen

};