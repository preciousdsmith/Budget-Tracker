class Budget{ //created a class called budget
constructor (){  //created constructor, everything inside of the curly braces are apart of the budget
    //making arrays that belong to the budget
this.expensesArray = []// An empty array to store the expenses
this.incomeArray = [] //An empty array to store the income amounts
this.finalIncome = 0; // A variable to hold the total income
this.finalExpenses = 0; // A variable to hold the total expenses
}
calculateIncome() {//methods
const incomeInput = document.getElementById("final-income") //grabbed the HTML tag
const incomeInputBtn = document.getElementById("final-incomeBtn")// Get the button that submits the income input
let finalIncome = 0
incomeInputBtn.addEventListener("click",()=>{// Add an event listener to the income button
    if(incomeInput.value.trim()===""){// If the income input is empty
        alert("Income box empty")// Alert the user that the income box is empty
    }
const incomeInputValue = Number(incomeInput.value)// Convert the input value to a number
if (!isNaN(incomeInputValue)){
    this.incomeArray.push(incomeInputValue); // If it's valid, push the value into the income array
} else {
    alert("please enter a valid number")// If it's not a valid number, alert the user
}
this.finalIncome = this.incomeArray.reduce((firstNumber, secondNumber) => firstNumber + secondNumber, 0);
console.log("Total income:", this.finalIncome);// Log the total income to the console for debugging
})//running code whenver user clicks on button

}
calculateExpense(){
const expensesInput = document.querySelector(".expenses-amount")// Get the input field where the user enters their expenses
const expensesInputBtn = document.querySelector(".final-ExpensesBtn")// Get the button that submits the expense input
expensesInputBtn.addEventListener("click",()=>{// Add an event listener to the expenses button
    if(expensesInput.value.trim()===""){// If the expense input is empty
        alert("expenses box empty")
    }
const expensesInputValue = Number(expensesInput.value) //convert the string into a number
if (!isNaN(expensesInputValue)) {//check if the value is a valid number
this.expensesArray.push(expensesInputValue)
} else {
alert("please enter a valid expense")
}
this.finalExpenses = this.expensesArray.reduce((firstNumber, secondNumber) => firstNumber + secondNumber, 0);
console.log("Total expenses:", this.finalExpenses); 
//returns final expenses
})


}
calculateBudget(){
    const budgetPrice = document.getElementById("Budget-price")
    document.getElementById("final-totalBtn").addEventListener("click", ()=> {
    budgetPrice.innerText = (this.finalIncome-this.finalExpenses)//subtracting whatever each method returns
    })
}
}
let budget = new Budget()
//console.log (budget.calculateIncome([3,4,7,18]))
//console.log(budget.calculateExpense([3,4,7,18]))
budget.calculateIncome();   // Set up income calculation
budget.calculateExpense();  // Set up expense calculation
budget.calculateBudget()

