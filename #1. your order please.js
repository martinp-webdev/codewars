function order(words) {
    if(words === "") return "";

    // Split the input string into an array of words
    let wordsArray = words.split(" ");

    // Sort the array of words based on the first numerical character in each word
    wordsArray.sort((a, b) => {
        let aNum = getFirstNumericalChar(a);
        let bNum = getFirstNumericalChar(b);
        return aNum - bNum;
    });

    // Convert the sorted array of words back into a string
    return wordsArray.join(" ");
}

function getFirstNumericalChar(word) {
    // Return the first numerical character in the word
    return word.split("").filter((char) => !isNaN(char))[0];
}