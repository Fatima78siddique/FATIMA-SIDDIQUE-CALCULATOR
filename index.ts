import inquirer from "inquirer";

function start() {
  
}
  inquirer
  .prompt([
    {
        type: "input",
        name: "num1",
        message: "Enter the first number",
    },
    {
        type: "input",
        name: "num2",
        message: "Enter the second number",  
    },
    {
        type: "list",
        name: "operations",
        choices:['+','-','*','/'],
        message: "Enter Your Operation",
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    console.log(answers);

    if (operation == "+") {
      sum(num1, num2);
  }
  else if (operation == "-") {
      subtract(num1, num2);
  }
  else if (operation == "*") {
      multiply(num1, num2);
  }
  else if (operation == "/") {
      division(num1, num2);
  }
  else {
      console.log("Invald Operation");
  }
  // Use user feedback for... whatever!!
})
  .catch((error) => {
  if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
  }
  else {
      // Something else went wrong
  }
});
let num1 = 5;
    let num2 = 10;
    let operation = "/";
    if (operation == "+") {
        sum(num1, num2);
   } 
   

function sum(num1:number,num2:number){
const result =num1+num2;
console.log("Sum",result)};
    
function subtract(num1:number,num2:number){
    const result =num1-num2;
    console.log("Substraction",result);
    }
 function multiply(num1:number,num2:number){
 const result =num1*num2;
 console.log("multiple ",result);
 }
function division (num1:number,num2:number){
  const result =num1/num2;
console.log("division", result);
}

start();