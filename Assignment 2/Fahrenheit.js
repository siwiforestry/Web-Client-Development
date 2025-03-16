function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
// Example usage
var fahrenheit = 50;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log("".concat(fahrenheit, "\u00B0F is equal to ").concat(celsius.toFixed(2), "\u00B0C"));
