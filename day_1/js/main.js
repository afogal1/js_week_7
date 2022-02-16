// Basics of JavaScript 

/* 
    Multi Comment in JavaScript 
    -- Variable Declaration in JavaScript --
    Primitive Types: string, integers, boolean, flats, arrays and objects {python dictionary}
    Functions in JavaScript 
    Loops in JavaScript

*/

// String Variable 
var first_name = "Will"

// Display our value to the JS console 
console.log(first_name)

// Integer Variable 
var some_number = 31 

// display our integer 
console.log(some_number)

// Float Variable 
var some_float = 3.14 

// Display Float 
console.log(some_float)

// Array Variable 
var some_array = [1,2,3,4]
console.log(some_array)

// Object Variable 
var some_object = {'test': 'Please test me!'}
// display object 
console.log(some_object)

// JAVASCRIPT HOISTING 
console.log(some_random_variable)
var some_random_variable = 'this is a random string'
console.log(some_random_variable)

// Using 'Let' or 'const' is generally a better way to assign variables 
// Example with console.log()
// console.log(full_name)
let full_name = first_name + ' Smith'
console.log(full_name)

// const keyword does not allow for reassignment 
const super_hero = 'The Hulk'
console.log(super_hero)

// const super_hero 'Iron Man'
// console.log(super_hero)

// Playing with Let 
let nba_goat = "MJ"
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)
// let nba_goat = "LeBron"

/* 
    Basic Math Operations in JS  // shift + alt + a 
*/

// Addition
let sum = 5 + 5 // let sum += 5
console.log(sum)

// Subtraction
let diff = 5 - 5 // lef diff -= 5
console.log(diff)

// Multiplication 
let product = 5 * 5 // let product *= 5
console.log(product)

// Division 
let quotient = 5 / 5 // let quotient /= 5
console.log(quotient)

// Exponential 
let squared = 5 ** 2 // let square **= 2
console.log(squared)

// MORE COOL MATH STUFF 
//  -- see math docs 
// finding the floor of a decimal 
let findFloor = Math.floor(30.8)
console.log(findFloor)

// find the ceiling of a decimal 
let findCeil = Math.ceil(30.8)
console.log(findCeil)

// Mind Bender 
let crazy_stuff = some_float + '4' 
console.log(crazy_stuff)

// Mind bender 2
let crazy_stuff2 = some_float + parseFloat('4')
console.log(crazy_stuff2)

/* 
    === JAVASCRIPT FUNCTIONS ===
*/
// Regular named functions 
function addNums(){
    let num = 4 
    let num2 = 5

    return num + num2 
}
// calling the function
console.log(addNums())

// Variable Named Functions with parameter 
let addNums2 = function(num, num2){
    return num + num2 
}
// Calling our variable named function 
console.log(addNums2(4, 6))

// ES6 Arrow Function in Javascript 
/* 
    Using a single parameter in an arrow function WITHOUT parentheses 
    can only be done with ONE parameter NOT if 2 or more are introduced 
*/
let multiplyNums = () => {
    let num = 4 
    let num2 = 2

    return num * num2 
}

console.log(multiplyNums())

let cubed = num => {
    return num ** 3
}

console.log(cubed(4))

let cubed2 = (num) => {
    return num **3 
}

console.log(cubed2(5))

let multiplyNums2 = (a, b) => {
    return a * b
}

console.log(multiplyNums2(6, 7))

// JavaScript Closure 
// Self-Invoking Functions
/* 
    our console.log in the below example DOES NOT have to be provided 
    --- we will just use this for an easier display of the output 
*/
console.log((function(name){
    let hello = 'Hello World' + name
    return hello
})(' Ryan'))

// JavaScript Control Flow 
// If Statements 
function determineAge(age){
    if (age < 18){
        return 'minor'
    }else if (age >= 18 && age <= 65){
        return 'Adult but not yet retired'
    }else {
        return 'Elder hopefully retired'
    }
}
console.log(determineAge(17))
console.log(determineAge(30))
console.log(determineAge(66))


function determineAge2(age){
    return ( age < 18 ) ? 'Minor' : (age >= 18 && age <= 65)
    ? 'Adult but not retired' : 'Elder, hopefully retired'
}

console.log(determineAge2(43))

function determineEvolution(level){
    if (level < 18){
        return 'Charmander'
    }else if (level > 16 && level <= 35){
        return 'Charmeleon'
    }else {
        return 'Charzard'
    }
}
console.log(determineEvolution(18))


function determineEvolution(level){
    return ( level < 16 ) ? 'Charmander' : (level >= 16 && level <= 35)
    ? 'Charmeleon' : 'Charzard'
}
console.log(determineEvolution(66))

// For Loops in JavaScript 
// For loops Syntax -- for keyword(counter; condition; incrementation/decrementation)

// Incrementing
function countByOne(){
    //for loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())

// decrementing 
function decreaseByOne(){
    for (let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decrementating has ceased'
}

console.log(decreaseByOne())

// While Loop - JavaScript 
function countWithWhile(){
    let i = 0 // Counter
    let text = ''

    // While Loop
    while(i < 10){
        text += `This number is ...${i} \n`
        i++ 
    }
    return text
}

console.log(countWithWhile())

// DO WHILE 
function countWithDoWhile(){
    let i = 0
    let text = '';

    do {
        text += `This number is this... ${i} \n`
        i++
    }
    while(i < 10)
    return text 
}
console.log(countWithDoWhile())

/* 
    Looping with Arrays and Array Methods, Array String Methods 
*/
let groupOfNames = ['Brock', 'Ash', 'Misty', 'Gary', 'Alphonso']

// Index for the first position == "Brock"
console.log(groupOfNames[0]) // Brock

// Deconstruction of an array 

let brock, misty, ash
[brock, misty, ash, ...others] = groupOfNames
// brock = groupOfNames[0]
// misty = groupOfNames[1]
// ash = groupOfNames[2]
console.log(brock, misty, ash, ...others)


// Looping through an array 
function showAllNames(names){
        //counter    //condition 
    for (i = 0; i < names.length; i++){
        console.log(names[i])
    }
    return 'No more names to show'
}
showAllNames(groupOfNames)


// Looping with ForEach
groupOfNames.forEach(element => console.log(element))


// JavaScript Array Method: Array.toString()
console.log(groupOfNames.toString)
console.log(typeof(groupOfNames.toString()))

/* JavaScript ARRAY METHODS: .map(), .filter(), .reduce()   */

// .map()
let b_names = groupOfNames.map(i =>{
    if (i[0] == 'A'){
        return i
    } else {
        return false
    }
})

console.log(b_names)

// .reduce()
const nums = [2, 4, 6 ,8 , 10]
let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

//  .filter()
let long_names = groupOfNames.filter( element => element.length > 4)
console.log(long_names)

//  Array Methods with String Values: .join(), .slice(), .search(), .splice()
// .join()
console.log(groupOfNames.join(", "))
console.log(typeof(groupOfNames.join(", ")))

// .slice()
console.log(groupOfNames.slice(0,3))

// .splice()
let old_rival = groupOfNames.splice(3, 1, 'Ryan')
console.log(`this was removed based on our splice: ${old_rival}`)
console.log(groupOfNames)

function replace_new_names(){
    // for Loop to get all names
    // and replace even indexes 
    for(i = 0; i < groupOfNames.length; i++){
        if(i % 2 == 0){
            groupOfNames.splice(i, 1, 'McLovin')
        }
    }
    return groupOfNames
}
console.log(replace_new_names())

// using .search and .slice on array values that are strings
console.log(groupOfNames[0].search('L')) // index 0

// String.slice()
console.log(groupOfNames[1].slice(0, groupOfNames.length))