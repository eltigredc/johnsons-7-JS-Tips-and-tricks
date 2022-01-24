let name = "diogo"
let lasName = "snoop"
let array = ["absolute", "ima string", "hello", name]
// console.log(array)

array.splice(2, 0, lasName)
console.log(array)
console.log(array.sort().reverse())

let twoDArray = [["hello", "world"],[1, 5],[true, 3],["string"]]

console.table(twoDArray)