const add=(num1,num2)=>num1+num2;
const sum=add(22,90);

const multiply=(num1,num2,num3)=>num1*num2*num3;
const result=multiply(4,12,3);
//console.log(result);
const fivetimes=num=>num*5;
const value=fivetimes(10);
//console.log(value);

const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    const output=result*5;
    return output;
}
const cal=doMath(2,3);
console.log(cal);
