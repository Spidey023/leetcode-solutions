/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let currSum = 0;

    // Step 1: first window
    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }

    if (currSum / k >= threshold) {
        count++;
    }

    // Step 2: slide the window
    for (let i = k; i < arr.length; i++) {
        currSum += arr[i] - arr[i - k];

        if (currSum / k >= threshold) {
            count++;
        }
    }

    return count;
};

