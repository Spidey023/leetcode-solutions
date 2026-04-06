/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let maxLen=0;
    let map = new Map()
   

  for(let num of nums){
    map.set(num, (map.get(num)||0) +1)
  }

  for(let num of map.keys()){
    if(map.has(num+1)){
        let len=map.get(num)+map.get(num+1)
        maxLen=Math.max(maxLen,len)
    }
  }
  return maxLen
};