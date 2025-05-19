//concetate defaut
const array1=[10,20,30,40,50];
const array2=[60,70,80,90,100];

const add=array1.concat(array2);
console.log(add);


//method 2 by spread operator 
const array3=[10,20,30,40,50];
const array4=[60,70,80,90,100];
const add1=[...array3, ...array4];
console.log(add1);

const max=Math.max(...array3);
console.log(max);