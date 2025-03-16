function removeFirstOccurrence(str, searchString) {
    // Find the index of the first occurrence of the search string
    const index = str.indexOf(searchString);

    // If the search string is found, remove it
    if (index !== -1) {
        return str.slice(0, index) + str.slice(index + searchString.length);
    }

    // If the search string is not found, return the original string
    return str;
}

// Example usage
const originalString = "Hello world";
const searchString = "ell";
const modifiedString = removeFirstOccurrence(originalString, searchString);
console.log(`Original string: "${originalString}"`);
console.log(`Modified string: "${modifiedString}"`);