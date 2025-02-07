var num=104;
var isPrime=1;
for(var i=2;i<num;i++){
    if(num%i==0){
        isPrime=0;
        break;
    }
}   
if(isPrime==1){
    console.log("This is a prime number");
}
else{
    console.log("This is not a prime number");
}
//another method
var num=3;
for(var i=2;i<num;i++)
{
    if(num%i==0){
        console.log("not prime number");
        break;
    }
else{
    console.log("Prime number")

}



}