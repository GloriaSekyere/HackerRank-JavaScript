/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
            
    const sortedNums = nums.sort(function(a,b){return a-b});
    let max = sortedNums[sortedNums.length-1];
    const numsLessThanMax = [];
            
    for (let i = 1; i < sortedNums.length + 1; i++) {
        if (sortedNums[i-1] >= 0 && 
            sortedNums[i-1] <= 100 && 
            sortedNums[i-1] < max){
                    
            numsLessThanMax.push(sortedNums[i-1]);
        }
    }
    return("Second Largest is:", numsLessThanMax[numsLessThanMax.length-1]);
    }
