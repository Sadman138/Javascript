var age=[10,20,30,40,50];
console.log(age);
console.log(age.indexOf(10))
//for first element added
console.log(age.unshift(60));
console.log(age);



//for last element added
console.log(age.push(60));
console.log(age);
console.log(age.length);
//For last elemts removed
console.log(age.pop());
console.log(age);


//For first elemts removed
console.log(age.shift());
console.log(age);


//For slice elements
var part=age.slice(2,5);
console.log(part);
//for splice elements
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2,7); // Removes 2 elements starting from index 2 and add 7
console.log(numbers); // Output: [1, 2, 5]

