//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.values(person3).length; i++){
    console.log(Object.values(person3)[i])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = (name, age) =>{
        console.log(`Name: ${this.name}, Current age: ${this.age}`)
    this.addAge = () =>{
        this.age = this.age + 1
        console.log(`Name: ${this.name}, Age: ${this.age}`)
        return 'You\'re one year older now!'
    }
    }
}

let larry = new Person('Larry', 59)
console.log(larry.printInfo())
console.log(larry.addAge())
console.log(larry.addAge())
console.log(larry.addAge())

let bob = new Person('Bob', 33)
console.log(bob.printInfo())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkString = theString => {
    return new Promise( (bicc, smol) => {
        (theString.length >= 10) ? bicc() : smol()
    })
}

checkString("supercalifragilisticexpialidocious")
.then( (result) => {
    console.log('Big word')
})
.catch( (error) => {
    console.log('Small Number')
})