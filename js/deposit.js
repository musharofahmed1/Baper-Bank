//step-1 add event listener
document.getElementById('btn-deposit').addEventListener('click',function(){
    //get deposit from deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step 3 Get the Current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 4 add numbers to set total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;
    //step 5 Get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString =  balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText =currentBalanceTotal;

    //Step-7 clear the deposit field
    depositField.value = '';
})