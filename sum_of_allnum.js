/*var num=[10,20,30,40,50];
var sum=0;
for(var i=0;i<num.length;i++)
{
    sum=sum+num[i];
}
console.log("total sum of array=",sum);
*/
//method 2
function sum(num){
    var sum=0;
for(var i=0;i<num.length;i++)
{
    sum=sum+num[i];
}
return sum;
}

console.log(sum([10,20,30,40,50,50]));