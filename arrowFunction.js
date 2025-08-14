// topic: Arrow Functions
//This function (only refer to the current context)

const user = {
    name: "John",
    age: 30,
    welcomemessage: function(){
        console.log(`Welcome ${this.name}, you are ${this.age} years old.`); //this function is only refer to the current context
    }
}

// user.welcomemessage(); // Outputs: Welcome John, you are 30 years old.
// user.name = 'Sam';
// user.welcomemessage(); // Outputs: Welcome Sam, you are 30 years old.


// arrow functions

const addTwo = (a, b) => {
    return a + b;
}
console.log(addTwo(5, 10)); // Outputs: 15

// another example

const multiplyTwo =(a, b) => a * b;
console.log(multiplyTwo(5, 10)); // Outputs: 50

//another example

const subTwo = (a, b) => (a - b);
console.log(subTwo(10, 5)); // Outputs: 5