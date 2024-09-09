function lengthOfLIS(nums) {
    if (!Array.isArray(nums)) {
        throw new Error("Input must be an array of integers.");
    }
    if (nums.length === 0) {
        return 0;
    }

    const dp = [];
    let length = 0;

    for (let num of nums) {
        let left = 0;
        let right = length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (dp[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        dp[left] = num;
        if (left === length) {
            length++;
        }
    }

    return length;
}
// Example usage:
const exampleArray = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(exampleArray)); // Output: 4

/*Explain :
 The dp array is used to store the smallest tail of all increasing subsequences found so far. The variable length keeps track of the number of increasing subsequences.
 For each number in the input array, a binary search is performed on the dp array to find the position where the current number can replace an existing value or extend the sequence. This is done using two pointers, left and right.
If the current number is greater than all elements in dp, it extends the longest subsequence, and length is incremented. Otherwise, it replaces the first element in dp that is greater than or equal to the current number.
 Finally, the function returns the length of the longest increasing subsequence.*/
