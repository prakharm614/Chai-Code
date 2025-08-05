// Working with Dates and Time in JavaScript

// 1. Creating a Date object (current date and time)
const now = new Date();
console.log('Current date and time:', now);

// 2. Creating a Date object with a specific date and time
const specificDate = new Date('2024-06-01T10:30:00');
console.log('Specific date and time:', specificDate);

// 3. Getting components of a date
console.log('Year:', now.getFullYear());
console.log('Month (0-11):', now.getMonth()); // 0 = January
console.log('Date:', now.getDate());
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());

// 4. Setting components of a date
now.setFullYear(2025);
now.setMonth(11); // December
now.setDate(25);
console.log('Modified date:', now);

// 5. Getting timestamp (milliseconds since Jan 1, 1970)
const timestamp = now.getTime();
console.log('Timestamp:', timestamp);

// 6. Comparing dates
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-06-01');
console.log('date1 < date2:', date1 < date2);

// 7. Formatting dates (to string)
console.log('toDateString:', now.toDateString());
console.log('toISOString:', now.toISOString());
console.log('toLocaleString:', now.toLocaleString());

// 8. Parsing date strings
const parsedDate = Date.parse('2024-06-01T10:30:00');
console.log('Parsed timestamp:', parsedDate);
console.log('Parsed date:', new Date(parsedDate));