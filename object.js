//singleton 

const mySym = Symbol("student"); //how to declare a symbol

const studentOne  ={
    name: "John",
    age: 21,
    "subject major": "Computer Science",
    email: "john@example.com",
    inLoggedIn: false,
    lastLoggedIn: ['monday', 'tuesday'],
    [mySym]: "mySym" //to add a symbol property into a object, first you have to declare the symbol. in this tutorial i declare the symbol in line 2
}


//console.log(studentOne); // Outputs the student object
// console.log(studentOne.age);
// console.log(studentOne.name);
// console.log(studentOne["subject major"]); // Accessing properties with spaces requires quotes
// console.log(studentOne[mySym]); // Accessing the symbol property


// to change a value of a property 

// studentOne.age = 22; //this is new value of the age property 


// console.log("the new age is " + studentOne.age);
// console.log(`the new age is ${studentOne.age}`); // Using template literals for string interpolation

// to freeze an object
Object.freeze(studentOne);

studentOne.age = 22;

//console.log(studentOne.age); // Outputs the original age, as the object is frozen and cannot be modified



// another type of object

const tinderUser={}

tinderUser.name = "Alice";
tinderUser.age = 25;
tinderUser.location = "New York";

// console.log(tinderUser);
// console.log(tinderUser.name);

const regularUser ={
    email: "sone@example.com",
    age:30,
    fullName: {
        
            firstName: "Sone",
            lastName: "Doe"
    }, 

    userLocation: {
        city: "Los Angeles",
        country: "USA"
    },
    active : true
}

//console.log(regularUser);

//now accessing the nested value
//console.log(regularUser.fullName.userName.firstName, regularUser.fullName.userName.lastName); // Accessing nested properties


// const obj1 ={a:1, b:2, c:3}
// const obj2 ={e:1, f:2, g:3}

// const objx = {obj1, obj2} //this is object literal notation
// console.log(objx);//{ obj1: { a: 1, b: 2, c: 3 }, obj2: { e: 1, f: 2, g: 3 } }
// const objty = Object.assign({}, obj1, obj2) //this is object assign method
// console.log(objty); // { a: 1, b: 2, c: 3, e: 1, f: 2, g: 3 }

// const obj3 = {...obj1, ...obj2} //this is spread operator | this is latest method


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

console.log(Object.values(regularUser));
console.log(Object.keys(regularUser));
console.log(Object.entries(regularUser));
