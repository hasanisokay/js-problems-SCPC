// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findIndices(arr, target) {
    for(i = 0; i < arr.length; i++) {
        let j = 0;
        while(j < arr.length){
            if(arr[i] + arr[j] === target){
                console.log([i,j]);
                return
            }
            j++;
        }
    }
}
findIndices([1, 3, 6, 8, 11, 15], 9)