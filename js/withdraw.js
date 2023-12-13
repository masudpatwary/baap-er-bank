//**1 */ Add event handler with the withdraw button
//**2 */ get the withdraw amount from the withdraw field
//**2.5 */ also make sure to convert the input into a number by using parsFloat
//**3 */ get previous withdraw total
//**4 */ Calculate total withdraw amount
//**4.5 */ set total withdraw amount
//**5 */ get the previous balance total
//**6 */ Calculate new balance total
//**6.5 */ set new balance total
//**7 */ clear the input field

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdraw = withdrawField.value;
  const withdrawString = parseFloat(withdraw);

  //** */   step 7
  withdrawField.value = "";

  if (isNaN(withdrawString)) {
    alert("Please provide a valid number");
    return;
  }

  const withdrawBalance = document.getElementById("withdraw-balance");
  const withdrawBalanceString = withdrawBalance.innerText;
  const withdrawTotalBalance = parseFloat(withdrawBalanceString);

  const amountBalance = document.getElementById("amount-balance");
  const previousBalanceTotalString = amountBalance.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (withdrawString > previousBalanceTotal) {
    alert("Insufficient Balance");
    return;
  }

  const totalWithdrawBalance = withdrawTotalBalance + withdrawString;
  withdrawBalance.innerText = totalWithdrawBalance;

  const currentBalanceTotal = previousBalanceTotal - withdrawString;
  amountBalance.innerText = currentBalanceTotal;
});
