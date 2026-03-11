/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
   let  maxCount=0;
    let map= {}
    let maxLenght=0;
    let right=0; let left=0;

    for(let right=0; right<s.length; right++){
        map[s[right]] = (map[s[right]] || 0 ) +1

        maxCount= Math.max(maxCount, map[s[right]])

        while((right-left+1)-maxCount >k){
            map[s[left]]--
            left++
        }

        maxLenght = Math.max(maxLenght, right - left+1)
    }

    return maxLenght
};