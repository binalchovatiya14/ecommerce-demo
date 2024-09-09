function twoSum(nums, target) {
    // Error handling for invalid inputs
    if (!Array.isArray(nums) || nums.length < 2) {
        throw new Error("Input must be an array with at least two elements.");
    }
    
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        // Store the index of the current number
        numMap.set(nums[i], i);
    }

    // If no solution is found
    throw new Error("No two sum solution exists.");
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]

/*Explain :
 The function loops through each number in the nums array. For each number, it calculates the complement (the number needed to reach the target when added to the current number).
If the complement exists in the Map, it means we have found the two numbers that add up to the target. The function then returns their indices.
 If the complement is not found, the current number and its index are stored in the Map for future reference.*/
