it("should calculate the monthly rate correctly", function () {
  expect(
    calculateMonthlyPayment({ amount: 50000, years: 25, rate: 5 })
  ).toEqual("292.30");
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 25000, years: 5, rate: 1.4 })
  ).toEqual("431.66");
  expect(
    calculateMonthlyPayment({ amount: 25000, years: 7, rate: 3.5 })
  ).toEqual("336.00");
});

/// etc
function myFunction(){

}

const myOtherFunction = () => {
  
}