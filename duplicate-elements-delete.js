var num=[10,20,30,10,20,40,50];
var num1=[];
for(var i=0;i<num.length;i++)
{
var index=num1.indexOf(num[i]);
if(index==-1)
{
    num1.push(num[i]);
}
}
console.log(num1)


var num = [10, 20, 30, 10, 20, 40, 50];
var num1 = [...new Set(num)];  // Removes duplicates automatically
console.log(num1);
