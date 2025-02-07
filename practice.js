function fibo(n)
{ 
    var fibo=[0,1];
    for(i=2;i<=5;i++)
    {
        fibo[i]=fibo[i-1]+fibo[i-2];

    }
    return fibo;

}
console.log(fibo(5));
