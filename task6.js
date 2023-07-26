// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const numbers = "0123456789";
const allCharacters = upperChars + lowerChars + numbers + specialChars; 

function createPassword(len=6){
    let password = "";
    password += getRandomChar(upperChars)
    password += getRandomChar(lowerChars)
    password += getRandomChar(specialChars)
    password += getRandomChar(numbers)
    const remainingLength = len - 4;
    for(i=0;i<remainingLength;i++){
        password += getRandomChar(allCharacters)
    }
    console.log(shuffleChar(password));
}
createPassword(10)

function getRandomChar(char){
   return char[Math.floor(Math.random() * char.length)]
}

function shuffleChar(char){
    const charArray = char.split("");
    for(i=charArray.length-1; i >0; i--){
        let j = Math.floor(Math.random()*(1 + i));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]]
    }
    return charArray.join("")
}
