/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let cs=0
    let ps=0;
    let map=new Map()
    let count=0
map.set(0,1)
    for(let i=0;i<nums.length;i++){
        cs+=nums[i]
        
        ps=cs-goal

        if(map.has(ps)){
            count+=map.get(ps)
        }

        map.set(cs, (map.get(cs) || 0) + 1);
    }
    return count
};