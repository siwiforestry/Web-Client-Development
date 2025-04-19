
# Web Client Development

A repository built for the Web Client Development lecture assignments. (edited)
=======
**Nama:** [Siwi Forestry]
**Prodi:** [Computer Science]
**Dosen Pengampu:** [Rony Setiawan]


# Temperature Converter

## Function

The function `fahrenheitToCelsius` takes a temperature in Fahrenheit as input and returns the equivalent temperature in Celsius.

### Code

javascript
function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Example usage
var fahrenheit = 50;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);

* Output:
50°F is equal to 10.00°C
* How to Use:
 1. Clone the repository:
    git clone https://github.com/username/repository.git
 2. Navigate to the project directory:
    cd repository/Assignment\ 2
 3. Run the JavaScript file using Node.js:
    node fahrenheit.js
* License
This project is licensed under the MIT License.


# Occurrence Remover

## Function

The function `removeFirstOccurrence` takes a string and a search string as input and returns the string with the first occurrence of the search string removed.

### Code

javascript
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
console.log(`Modified string: "${modifiedString}"`)

* Output:
Original string: "Hello world"
Modified string: "Ho world"
* How to Use:
    1. Clone the repository:
        git clone https://github.com/username/repository.git
    2. Navigate to the project directory:
        cd repository/Assignment\ 2
    3. Run the JavaScript file using Node.js:
        node occurrence.js
* License:
This project is licensed under the MIT License.


# Palindrome Checker

## Function

The function `isPalindrome` takes a string as input and returns `true` if the string is a palindrome and `false` otherwise.

### Code

javascript
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

* Output:
"madam" is a palindrome: true
* How to Use:
    1. Clone the repository:
        git clone https://github.com/username/repository.git
    2. Navigate to the project directory:
        cd repository/Assignment\ 2
    3. Run the JavaScript file using Node.js:
        node palindrome.js
* License:
This project is licensed under the MIT License.


# N-Value Checker

This project contains a function to check whether a given integer `n` is even or odd.

## Function

The function `isEven` takes an integer `n` as input and returns `true` if `n` is even and `false` if `n` is odd.

### Code

javascript
function isEven(n) {
    // Check if the number is even
    return n % 2 === 0;
}

// Example usage
const number = 1001;
const result = isEven(number);
console.log(`${number} is even: ${result}`);

* Output:
1001 is even: false
* How to Use:
    1. Clone the repository:
        git clone https://github.com/username/repository.git
    2. Navigate to the project directory:
        cd repository/Assignment\ 2
    3. Run the JavaScript file using Node.js:
        node nvalue.js
* License:
This project is licensed under the MIT License.
