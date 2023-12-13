//**1 */ Add event handler with the withdraw button
//**2 */ get the withdraw amount from the withdraw field
//**2.5 */ also make sure to convert the input into a number by using parsFloat

// step 1 event handler

document.getElementById("btn-diposit").addEventListener("click", function () {
  // step 2 find the input value

  const dipositInputField = document.getElementById("deposit-field");
  const diposit = dipositInputField.value;
  const dipositString = parseFloat(diposit);

  //** */   step 7
  dipositInputField.value = "";

  if (isNaN(dipositString)) {
    alert("Please provide a valid number");
    return;
  }

  //   step 3 find the previous diposit amount
  const dipositTotalElement = document.getElementById("diposit-total");
  const dipositAmount = dipositTotalElement.innerText;
  const dipositTotalElementString = parseFloat(dipositAmount);

  // step 4 sum of input and diposit
  const totalDiposit = dipositString + dipositTotalElementString;
  dipositTotalElement.innerText = totalDiposit;

  //   step 5 sum of present diposit and Balance

  const amountBalance = document.getElementById("amount-balance");
  const previousBalanceTotalString = amountBalance.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotal = previousBalanceTotal + dipositString;
  amountBalance.innerText = currentBalanceTotal;

  //   step 6 withdraw
});
