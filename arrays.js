var names = ["Jenny", "Jerry", "John", "JJ"];
var ages = [4, 5, 6, 7]
var isConfused = [false, true, true, false]

// removes the last element, "JJ" in array
names.pop()

// adds the Number, 100, to the end of the array
ages.push(100)

// adds the Boolean, true, to the beginning of array
isConfused.unshift(true)


// index position starts at 0
// for example, the line of code below will print
// the Number 4 to the console instead of of the 
// Number 2 since the element position is at 1
var ages = [2, 4, 6, 8, 10]
console.log(ages[1]);