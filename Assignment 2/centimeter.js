function centimetersToKilometers(centimeters) {
    // Convert centimeters to kilometers
    const kilometers = centimeters / 100000;
    return kilometers;
}

function kilometersToCentimeters(kilometers) {
    // Convert kilometers to centimeters
    const centimeters = kilometers * 100000;
    return centimeters;
}

// Example usage
const centimeters = 100000;
const kilometers = centimetersToKilometers(centimeters);
console.log(`${centimeters} cm is equal to ${kilometers} km`);

const kilometersInput = 7.5;
const centimetersOutput = kilometersToCentimeters(kilometersInput);
console.log(`${kilometersInput} km is equal to ${centimetersOutput} cm`);