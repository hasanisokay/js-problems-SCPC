// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


function sumArr(arr){
    console.log(arr.reduce((sumSoFar, current) => sumSoFar + (current >0? current:0), 0));
}
sumArr([2, -5, 10, -3, 7])