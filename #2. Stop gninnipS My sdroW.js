function spinWords(str) {
    // Split the string into an array of words
    const words = str.split(" ");
  
    // Iterate over the array of words
    for (let i = 0; i < words.length; i++) {
      // Check if the current word has 5 or more letters
      if (words[i].length >= 5) {
        // Reverse the word
        words[i] = words[i].split("").reverse().join("");
      }
    }
  
    // Join the array of words back into a string and return it
    return words.join(" ");
  }