//using for loop;

var fibo = [0, 1];  
for(var i=2;i<=10;i++){
fibo[i]=fibo[i-1]+fibo[i-2];
console.log(fibo[i]);
}
console.log(fibo);

//using function;
function fibonacci(n){
    var fibo = [0, 1];  
    for(var i=2;i<=n;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
console.log(fibonacci(10));


//recursive function;
function fibonacci(n){
    if(n==0)
        return [0];
    if(n==1)
        return [0,1];
    else{
        var fibo = fibonacci(n-1);
        fibo[n]=fibo[n-1]+fibo[n-2];
        return fibo;
    }
}
console.log(fibonacci(10));
