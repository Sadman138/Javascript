//method 1
var a=10,b=20;
var temp=a;
a=b;
b=temp;
console.log("After Swapping a:",a,"b:",b);

//method2

var a=10,b=20;
a=a+b;
b=a-b;
a=a-b;
console.log("After Swapping a:",a,"b:",b);
//method 3
var a=10,b=20;
[a,b]=[b,a];
console.log("After Swapping a:",a,"b:",b);