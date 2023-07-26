// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInteger(roman) {
    const romanNumerals = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000};
  
    let integer = 0;
    let previousValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentChar = roman[i];
      const currentValue = romanNumerals[currentChar];
  
      if (currentValue < previousValue) {
        integer -= currentValue;
      } else {
        integer += currentValue;
      }
  
      previousValue = currentValue;
    }
  console.log(integer);
    return integer;
  }
  romanToInteger("XX")