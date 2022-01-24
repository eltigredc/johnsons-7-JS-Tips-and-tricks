// for
// while
// forEach

const cakeMachine = (flavor) => {
	console.log(`here is your ${flavor} cake`)
}

// for (let i = 1; i <= 10; i++) {
// 	cakeMachine('chocolate')
// }

let i = 0

while(i <= 10){
	cakeMachine('chocolate')
	i++
}


let array = ["Hello", "ok", "almost finnish the prez dw"]

array.forEach((element) => {
	console.log(element)
})


// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i])
// }







