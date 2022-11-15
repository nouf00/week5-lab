import { question } from "readline-sync"
import { prompt } from "readline-sync"

function Calu (num1:number, num2:number , Operation:string) :void{

    if(Operation == "+"){
    console.log(num1 +num2)}
    else if(Operation=="-"){
    console.log(num1 -num2)}
    else if (Operation == "/"){
    console.log(num1 /num2)}
else if(Operation == "*"){
    console.log(num1 *num2)}
    else{ console.log("please Enter corect Operation")}
  
}

let Enter1:string , Enter2:string , Operation:string; 

Enter1=question("Enter Frist Number ")
Operation=question("Enter the Operation ")
Enter2=question("Enter Secnd Number")


Calu(Number(Enter1),Number(Enter2),Operation)




interface info{

    Name:String
    Age:Number
    Specialization:string
    BestFreind?:string
}


let user:info={
    Name:"Nouf Fahad",
    Age:24,
    Specialization:"Computer Science"


    
}

console.log("My name: " + user.Name)
console.log("My Age: " + user.Age )
console.log("My Specialization: " + user.Specialization)


// const prompts = require('prompts');



// (async () => {
//   const response = await prompts({
//     type: 'number',
//     name: 'value',
//     message: 'Enter Number 1',
   
//   });

//   console.log(response); // => { value: 24 }
// })();

// let Enter1:number;
// let Enter2:number;

// Enter1 =prompt
// Enter2 =prompt( " Enter 2")

// console.log(Enter1)
// console.log(Enter2)

// Calu(Enter1,Enter2)