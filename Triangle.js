function findThirdAngle(angle1, angle2) {
    // The sum of angles in a triangle is always 180 degrees
    const angle3 = 180 - (angle1 + angle2);
    return angle3;
}

// Example usage
const angle1 = 80; // First angle in degrees
const angle2 = 65; // Second angle in degrees
const angle3 = findThirdAngle(angle1, angle2); // Calculate the third angle
console.log(`The third angle is ${angle3} degrees`); // Output the third angle