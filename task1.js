// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseStr(str){
    console.log(str.split("").reverse().join(""));
}

reverseStr("Hello World")