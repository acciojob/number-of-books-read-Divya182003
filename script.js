// Sample library object
const library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    { author: "Suzanne Collins", title: "Mockingjay", readingStatus: false }
];

// Function to count books with readingStatus === true
function numberOfBooksRead() {
    return library.filter(book => book.readingStatus).length;
}

// Example usage:
console.log(numberOfBooksRead()); // Output: 2
