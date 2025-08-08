// let score = undefined;
// console.log(typeof score); // "undefined"

// let scoreString = String(score); //convert undefined to string
// console.log(typeof scoreString); // "string"
// console.log(scoreString); // "undefined"

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert number to boolean
// //console.log(typeof booleanIsLoggedIn); // "boolean"
// console.log(booleanIsLoggedIn);



//to convert a veriable to other data type there are three methods: String(), Number(), and Boolean()

let newSrting = "    tapas    "
// console.log(newSrting.trim()); // "tapas" - removes whitespace from both ends of the string
// console.log(newSrting.replace('t','T'));

//console.log(newSrting.trim().toUpperCase()); // "TAPAS" - converts to uppercase after trimming

let anotherString = newSrting.trim().toLocaleUpperCase(); // "TAPAS" - converts to uppercase after trimming

console.log(anotherString); // "TAPAS"

console.log(anotherString.replace('T', 'A')); // "AAPAS"
console.log(anotherString.includes("APAS")); // true - checks if the string contains "APAS"
console.log(anotherString.includes("apas")); // false - checks if the string contains "apas" , case-sensitive

console.log(anotherString.startsWith("T")); // true - checks if the string starts with "T", case-sensitive
console.log(anotherString.endsWith("S")); // true - checks if the string ends with "S" ,case-sensitive

