/* Practice Assignment 6:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create an array named myPizzaOrder that cannot be reassigned and
// contains the 3 elements: "Pepperoni", 12.99, false
const myPizzaOrder = ["Pepperoni", 12.99, false]

// 2) Create a function named getPizzaType that will accept an array
// as a parameter and returns the 1st element from the array.
const getPizzaType = (pizzaOrder) => {
	return pizzaOrder[0]
}

// 3) Create a function named addTax that will accept an array
// like your myPizzaOrder array as a parameter. The function will
// insert an element into the array between the 2nd and 3rd
// element in the array that is equal to the 2nd element multiplied
// by 0.0925 and rounded to the nearest penny (ie 0.95, 0.79, 0.42, etc).
// The function should return the array.
// ===========
// Hint: find the method that will allow you to set the decimals.
const addTax = (pizzaOrder) => {
	tax = (pizzaOrder[1] * .0925).toFixed(2)
	pizzaOrder.splice(2, 0, parseFloat(tax))
	return pizzaOrder
}
console.log(addTax(myPizzaOrder))

// 4) Create a function named completeOrder that will accept an array
// as a parameter. The function will change the value of the 4th
// element in the array to true and return the array.
const completeOrder = (pizzaOrder) => {
	pizzaOrder[3] = true
	return pizzaOrder
}
console.log(completeOrder(myPizzaOrder))

// 5) Create a function named allTheNumbers that accepts a number as
// a parameter. The function will create an array that contains all of
// the numbers from 1 to whatever number the parameter is. The array
// should not include the parameter number. The function returns
// the array.
const allTheNumbers = (number)=>{
	//creates an array from parameter number
	let numbers = (max)=> Array.from(new Array(max), (_, i)=> i)
	//filters out 0
	numbersArray = numbers(number).filter(x=> x!=0)

	return numbersArray
}
console.log(allTheNumbers(10))

// 6) Create a function named getEvens that accepts 2 parameters:
// startNum and endNum. The function should return an array that
// includes the even numbers from startNum to endNum. If the startNum
// or endNum are even, they should be included in the returned array.
const getEvens = (startNum, endNum)=>{
	evenArray = []
	for(let i=startNum; i<=endNum; i++){
		if(i%2===0){
			evenArray.push(i)
		}
	}
	return evenArray
}

console.log(getEvens(2,10))

// 7) Create a function named getLastElement that accepts an array
// as a parameter and returns the last element of the array. The
// array can have any number of elements. The function should always
// return the last element.
const getLastElement = (theArray)=>{
	end = theArray.length-1
	return theArray[end]
}
console.log(getLastElement(myPizzaOrder))

// 8) Create a function named combineArrays that accepts two arrays
// as parameters and combines them into one array. The function
// should return the new combined array.

const combineArray = (firstArray, secondArray)=>{
	firstArray.push(...secondArray)
	return firstArray
}

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(combineArray(myPizzaOrder, numbersList))

// 9) Create a function named isPalindrome that accepts a string as
// a parameter. The function will return true if the string is a
// palindrome and false if the string is not. To check for a
// palindrome, remove all spaces and set to lowercase. The string
// will be identical both forward and reverse if it is a palindrome.
// For example: Taco Cat is a palindrome. tacocat is the same both
// forward and reverse.
// ==========
// Hints: There are several possible solutions for this. I use a
// combination of string and array methods. You can turn the string
// into an array, use arrays methods, and turn the array back into
// a string. This is also a challenge on freeCodeCamp. Check the
// help forums there if you get stuck!


const isPalindrome = (s)=>{

//remove all non alphanumeric characters
let cleanString = s.toLowerCase().replace(/[\W_]/g,'')

//reverse the string to check
let reverseCleanString = cleanString.split('').reverse().join('')

return cleanString === reverseCleanString
}

console.log(isPalindrome("A man, a plan, a canal. Panama"))