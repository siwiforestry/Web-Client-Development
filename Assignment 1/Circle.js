function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 5);

    return {
        diameter: diameter,
        circumference: circumference,
        area: area
    };
}

// Example usage
const radius = 5;
const circleProperties = calculateCircleProperties(radius);
console.log(`Diameter: ${circleProperties.diameter}`);
console.log(`Circumference: ${circleProperties.circumference}`);
console.log(`Area: ${circleProperties.area}`);