/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum=0
    let total=0


   for(let j=0;j<nums.length;j++){
    total+=nums[j]
   }

    for(let i=0;i<nums.length;i++){
       

        let rightSum=total - leftSum - nums[i]
         
          
        if(leftSum===rightSum){
            return i
        }
leftSum+=nums[i]
    }
    return -1
};