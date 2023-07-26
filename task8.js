
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function secondSmallest(arr){
    if(!arr){
        console.log("please give an arry of number");
        return 
    }
    const secondSmall = arr.sort((a, b) => a - b)[1]
    console.log(secondSmall)
    return secondSmall

}
secondSmallest([2,23,4,5,3,6,7,8])