function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
}

// Example usage
const string = "madam";
console.log(`"${string}" is a palindrome: ${isPalindrome(string)}`);
