// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, operator, num2){
    if(operator==="+"){
        console.log(`${num1} ${operator} ${num2} = ${num1+num2} `); 
    }
    else if(operator==="-"){
        console.log(`${num1} ${operator} ${num2} = ${num1-num2} `); 
    }
    else if(operator==="/"){
        console.log(`${num1} ${operator} ${num2} = ${num1/num2} `); 
    }
    else if(operator==="*"){
        console.log(`${num1} ${operator} ${num2} = ${num1*num2} `); 
    }
}
calculator(3,"/",4)