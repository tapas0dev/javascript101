const myArray = [1, 2, 3, 4, 5];
//console.log(myArray);
// console.log(myArray.length); // Outputs the length of the array
// console.log(myArray[0]); // Outputs the first element of the array
// console.log(myArray[myArray.length - 2]); // Outputs the last element of the array

// let otherArray = myArray.slice(0, 4); // Creates a new array from index 0 to 3 (not including index 4)
// let anotherArray = myArray.slice(1, 4); // Creates a new array from index 1 to 3 (not including index 4)
let newArray= myArray.splice(1, 2, 'may');// Removes the first two elements from the original array
// console.log(otherArray, anotherArray, newArray  );
// console.log( newArray  );
// console.log( myArray  );

const studentName = "John Doe";

let nameArray = (Array.from(studentName));
console.log(nameArray); // Converts the string to an array of characters