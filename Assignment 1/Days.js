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