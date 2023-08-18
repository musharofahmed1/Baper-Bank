//step 1 add event listner with button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step 2 get withdraw amount from withdraw amount field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step 3 get previous withdraw total

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //clear field
    withdrawField.value = '';
   
    //input validity check
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide A Valid Number');
        return;
    }

    //get previous balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    //alert
    if(newWithdrawAmount > previousBalanceTotal){
        alert('You Have No Enough Money');
        return;
    }
    //step 4 calculate current withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //calulate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})