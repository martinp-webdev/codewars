function sumOfIntegersInString(str) {
    // Initialize the sum and current number to 0
    let sum = 0;
    let currentNumber = 0;
  
    // Iterate through the characters in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      // If the character is a numeric digit
      if (!isNaN(parseInt(char))) {
        // Add the digit to the current number
        // Eg: 0 * 10 + 5 -> 5 added (single digit), 
        // Eg: 5 * 10 + 3 -> 53 (continuation of previous example where next digit is 3) & counter doesn't get zeroed out
        currentNumber = currentNumber * 10 + parseInt(char);
      } else {
        // If the character is not a numeric digit, add the current number to the sum
        sum += currentNumber;
        // Reset the current number to 0
        currentNumber = 0;
      }
    }
    
    // Add the final current number to the sum
    sum += currentNumber;
  
    // Return the sum
    return sum;
  }
  