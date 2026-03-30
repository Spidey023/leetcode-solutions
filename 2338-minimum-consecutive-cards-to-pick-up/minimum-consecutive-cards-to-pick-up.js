/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let set = new Set();
    let left = 0;
    let minLen = Infinity;

    for(let right = 0; right < cards.length; right++){

        // if duplicate found
        while(set.has(cards[right])){
            minLen = Math.min(minLen, right - left + 1);
            set.delete(cards[left]);
            left++;
        }

        set.add(cards[right]);
    }

    return minLen === Infinity ? -1 : minLen;
};