# Web Client Development

**Nama:** [Siwi Forestry]
**Prodi:** [Computer Science]
**Dosen Pengampu:** [Rony Setiawan]

## Write a code to measure Rectangle, Circle, Triangle, Days and Intitial Name

## Kode Program

## Rectangle Area
```
function calculateRectangleArea(length, width) {
      return length * width;
  }
  
  //Example usage
  const length = 5;
  const width = 3;
  const area = calculateRectangleArea(length, width);
  console.log(`The area of rectangle is ${area}`);
```
  Input: Length = 5, width = 3
  Output:
  The area of rectangle is 15

## Circle
```
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
```
Input : radius = 5
Output:
iameter: 10
Circumference: 31.41592653589793
Area: 9817.477042468103

## Triangle
```
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
```
Input : a = 80, b = 65
Output:
The third angle is 35 degrees

## Different between dates in days
```
function getDifferenceInDays(date1, date2) {
    // Convert both dates to milliseconds
    const date1Ms = new Date(date1).getTime();
    const date2Ms = new Date(date2).getTime();

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1Ms - date2Ms);

    // Convert back to days and return
    return Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
}

// Example usage
const date1 = '2024-03-19';
const date2 = '2024-03-21';
const differenceInDays = getDifferenceInDays(date1, date2);
console.log(`The difference between the two dates is ${differenceInDays} days`);
```
input: date1 = 2024-03-19, date2 = 2024-03-21
Output:
The difference between the two dates is 2 days

## Print name initial in Uppercase
```
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
```
input: John Doe
Output:
The initials are JD


