// Declare a variable that stores an Array of at least 4 Strings.
var strs = ["this", "array", "has", "four"];
// Using .push() with a new string inside the () will add that string to the end of the array. Or 'push' it onto the end of the array.
strs.push("strings");
console.log(strs); // Print the array after using .push()
console.log(strs[1]); // Print index 1 of the array (array) 

// Declare a variable that stores an Array of at least 4 Numbers.
var nums = [1, 2, 3, 4];
// Using .shift() will remove the first element of the array and 'shift' over the array.
nums.shift();
console.log(nums); // Print the array after using .shift()
console.log(nums[2]); // Print index 2 of the array (4)

// Declare a variable that stores an Array of at least 4 Booleans.
var bools = [true, false, true, false];
// Using .pop() with a new boolean inside the () will remove that boolean from the end of the array. Aka 'pop' it off the end.
bools.pop(true);
console.log(bools); // Print the array after using .pop()
console.log(bools[0]); // Print index 0 of the array (true)