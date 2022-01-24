// What can we do with strings?

// - Concatenation:

let name = "Diogo";
let lastName = "Heinen";

let fullName = `hello, My name is ${name} ${lastName}`

console.log(fullName)

// CamelCase
// lowerCamelCase
// Playing around

console.log(fullName[fullName.length - 1])


fullName = fullName.replace("Diogo Heinen", "Coach Snoop")

console.log(fullName)