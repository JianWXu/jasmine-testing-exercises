window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountValues = {
    amount: 55000,
    years: 25,
    rate: 20,
  };
  let loanAmount = document.getElementById("loan-amount");
  loanAmount.value = amountValues.amount;
  let loanYears = document.getElementById("loan-years");
  loanYears.value = amountValues.years;
  let loanRate = document.getElementById("loan-rate");
  loanRate.value = amountValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let current = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(current));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let rate = values.rate / 100;
  let monthlyPayment =
    (values.amount * (rate / 12)) /
    (1 - (1 + rate / 12) ** (-1 * (values.years * 12)));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPay = document.getElementById("monthly-payment");
  monthlyPay.innerText = "$" + monthly;
}
