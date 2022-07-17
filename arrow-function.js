//function expression
const addition= function add(num1,num2){
    return num1+num2;
}

//function expression(anonymous)
const addition1=function(num1,num2){
    return num1+num2;
}
const addition2=addition1(10,10);
//console.log(addition2);

//arrow function
const add4=(num1,num2)=>num1+num2;
const sum=add4(10,11);
console.log(sum);