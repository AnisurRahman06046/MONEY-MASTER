document.getElementById('btn-calculate').addEventListener('click',function(){
    const food = allExpenses('food-field');
    const rent = allExpenses('rent-field');
    const clothes = allExpenses('cloth-field');
    const totalexpenditure = food + rent + clothes;
    

    // const totalExpenseElement = document.getElementById('total-expense');
    // totalExpenseElement.innerText = totalexpenditure;
    const totalExpense = calculation('total-expense',totalexpenditure);

    const income = allExpenses('income-field');
    const balance = income-totalexpenditure;
    const totalBalance = calculation('total-balance',balance);



    
})

document.getElementById('btn-save').addEventListener('click',function(){
    const saving = allExpenses('saving-field');
    const incomeAmount = allExpenses('income-field');
    const savingPercent = incomeAmount*(saving/100);
    const savingAmount = calculation('saving-amount',savingPercent);


   const previousBalanceElement = document.getElementById('total-balance');
   const previousBalanceString = previousBalanceElement.innerText;
   const previousBalance = parseInt(previousBalanceString);
   const remainingBalance = previousBalance - savingPercent;
   const finalRemainingBalance =  calculation('remaining-balance',remainingBalance);


})