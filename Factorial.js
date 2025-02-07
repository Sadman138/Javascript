//using for loop;

var fact=1;

for(var i=1; i<=10; i++){
    fact=fact*i;
    console.log(fact);
}

//using while loop;
var fact=1;
var i=1;
while(i<=10){
    fact=fact*i;
    console.log(fact);
    i++;
}

///using function;
function factorial(n){
    var fact=1;
    for(var i=1; i<=n; i++){
        fact=fact*i;
    }
    return fact;
}

console.log(factorial(10));

//recursive function;
function factorial(n){
if(n==0)
    return 1; 
else
    return n*factorial(n-1);    


}
console.log(factorial(10));