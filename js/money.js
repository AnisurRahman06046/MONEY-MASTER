document.getElementById('btn-calculate').addEventListener('click',function(){
    const food = allExpenses('food-field');
    const rent = allExpenses('rent-field');
    const clothes = allExpenses('cloth-field');
    
    if (isNaN(food,rent,clothes)){
        alert('enter number')
        return;
    }
    else if(food<0 || rent<0 || clothes<0){
        alert('invalid! enter positive number');
        return;
    }
    const totalexpenditure = food + rent + clothes;
    const income = allExpenses('income-field');
    if (totalexpenditure>income){
        alert('expense is greater than income');
        return;
    }
    

    // const totalExpenseElement = document.getElementById('total-expense');
    // totalExpenseElement.innerText = totalexpenditure;
    const totalExpense = calculation('total-expense',totalexpenditure);

    
    if (income<0){
        alert('invalid! enter a positive number');
        return;
    }
    else if(totalexpenditure>income){
        alert('cannot proceed! expense is greater than income');
        return;
    }
    const balance = income-totalexpenditure;
    const totalBalance = calculation('total-balance',balance);



    
})

document.getElementById('btn-save').addEventListener('click',function(){
    const saving = allExpenses('saving-field');
    if(isNaN(saving)){
        alert('enter number');
        return;
    }
    else if(saving<0){
        alert('invalid amount ! enter positive number');
        return;
    }
    else if(saving>100){
        alert('not possible more than 100%')
        return;
    }
    

    const incomeAmount = allExpenses('income-field');
    const previousBalanceElement = document.getElementById('total-balance');
    const previousBalanceString = previousBalanceElement.innerText;
   const previousBalance = parseInt(previousBalanceString);
    
    const savingPercent = incomeAmount*(saving/100);
    if (savingPercent>previousBalance){
        alert('can not save more than balance');
        return;
    }
   
    const savingAmount = calculation('saving-amount',savingPercent);


   
   
   const remainingBalance = previousBalance - savingPercent;
   const finalRemainingBalance =  calculation('remaining-balance',remainingBalance);


})