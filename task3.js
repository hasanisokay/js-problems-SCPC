// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findFrequent(arr){
    let count = 0
    let frequentElement
    for(i of arr){
        let checCurrentElement = arr.filter(item => item ===i).length;
        if( checCurrentElement> count){
            count = checCurrentElement;
            frequentElement = i
        }
    }
    console.log(`${frequentElement} appeared ${count} times.`);
}

findFrequent([1,2,2,22,2,32,433,2])