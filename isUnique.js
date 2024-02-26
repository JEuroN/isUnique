const message = "holamegjqwrzx"

//if we consider the whitespace as a character, we can add .replace(/\s+/g, '') before the split to remove all the whitespaces
//in the same manner, if we consider lowercase and uppercase to be same characters, we will need .toLowerCase()

//turned the string into an array

const stringArray = message.split('')

//Sort the newly created array

stringArray.sort()

//Once sorted, if there is a repeated character, it will be on the next position of the array

const result = stringArray.some((value, index) => value === stringArray[index + 1])
console.log(`The word ${message} has repeated characters?: ${result}`)
console.log(result)