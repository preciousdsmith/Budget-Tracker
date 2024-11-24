class Budget{ //created a class called budget
constructor (){                  //created constructor, everything inside of the curly braces are apart of the budget
    //making arrays that belong to the budget
this.expensesArray = []
this.incomeArray = [] //set them equal, income is a property
this.finalIncome = 0; 
this.finalExpenses = 0; 
}
calculateIncome() {//methods
const incomeInput = document.getElementById("final-income") //grabbed the HTML tag
const incomeInputBtn = document.getElementById("final-incomeBtn")
let finalIncome = 0
incomeInputBtn.addEventListener("click",()=>{//the function keyword and the this keyword does not work well in a class 
    if(incomeInput.value.trim()===""){
        alert("Income box empty")
    }
const incomeInputValue = Number(incomeInput.value)
if (!isNaN(incomeInputValue)){
    this.incomeArray.push(incomeInputValue);
} else {
    alert("please enter a valid number")
}
this.finalIncome = this.incomeArray.reduce((firstNumber, secondNumber) => firstNumber + secondNumber, 0);
console.log("Total income:", this.finalIncome);
})//running code whenver user clicks on button

}
calculateExpense(){
const expensesInput = document.querySelector(".expenses-amount")
const expensesInputBtn = document.querySelector(".final-ExpensesBtn")
expensesInputBtn.addEventListener("click",()=>{
    if(expensesInput.value.trim()===""){
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

