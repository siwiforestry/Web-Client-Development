function getInitials(name) {
    // Split the name into words
    const words = name.split(' ');

    // Get the first letter of each word and convert to uppercase
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('');

    return initials;
}

// Example usage
const name = 'John Doe';
const initials = getInitials(name);
console.log(`The initials are ${initials}`);

