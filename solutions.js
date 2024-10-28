// 1. Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const multipliedNums = nums.map((nums) => {
  return nums * 2
})

// console.log(multipliedNums)

// 2. Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"]

// Your code here

const [firstFood, secondFood] = pizzaToppings
// console.log(firstFood)
// console.log(secondFood)

// 3. Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
}

// Your code here

const make = car.make
const model = car.model
// console.log(make)
// console.log(model)

// 4. Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// Your code here
const controversialPizzaToppings = [...pizzaToppings]
// console.log(controversialPizzaToppings)

// 5. Duplicate the following object and spread its values into a new variable `myCar`.

const myCar = { ...car }

// Change the `model` property of `myCar` to 'q7'. Log both objects.

myCar.model = "q7"

// Your code here
// console.log(car)
// console.log(myCar)

// 6. Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
let userProfile = {}
let propertyName = "username"

userProfile[propertyName] = "molly88"

// console.log(userProfile)

// 8. Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const noun = `cat`
const adjective = `white`

const sentence = (first, second) => {
  console.log(`The ${first} is ${second}.`)
}

// sentence(noun, adjective)

// 9. Convert the following `if...else` statement in to a ternary:

let pizza = "tasty"

// if (pizza === "tasty") {
//   console.log("yum")
// } else {
//   console.log("yuck")
// }

// Your code here
// let deliciousness = pizza === "tasty" ? console.log("yum") : console.log("yuck")

// 10. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

const LANG = localLangConfig || "en"

// Log the result
// console.log("Language setting:", LANG)

// 11. Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: "Alice",
}

let cat = adventurer.cat?.name // Your code here

console.log(cat)
