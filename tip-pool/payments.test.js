describe("Payments Test (with set up and tear down)", function () {
  beforeEach(function () {
    serverNameInput.value = "Jenny";
    billAmt.value = 1500;
    tipAmt.value = 300;
    submitServerInfo();
    submitPaymentInfo();
  });

  it("should create a new payment object where bill amount and tip amount is entered and tip percent calculated", function () {
    // allPayments["payment1"] = {billAmt:1500, tipAmt:300, tipPercent:calculatTipPercent(billAmt, tipAmt)}
    // submitPaymentInfo();

    expect(Number(allPayments["payment" + paymentId].billAmt)).toEqual(1500);
    expect(Number(allPayments["payment" + paymentId].tipAmt)).toEqual(300);
    expect(Number(allPayments["payment" + paymentId].tipPercent)).toEqual(
      calculateTipPercent(
        allPayments["payment" + paymentId].billAmt,
        allPayments["payment" + paymentId].tipAmt
      )
    );
  });

  it("should append server, bill amount, tip amount, tip percent to paymentTable", function () {
    // submitPaymentInfo();
    // submitServerInfo();
    expect(paymentTbody.innerText).toContain(1500);
    expect(paymentTbody.innerText).toContain(300);
    expect(paymentTbody.innerText).toContain(
      allPayments["payment" + paymentId].billAmt
    );
    expect(serverTbody.innerText).toContain("Jenny");
  });

  it("should update shift summary table", function () {
    expect(summaryTds[0].innerText).toContain(1500);
    expect(summaryTds[1].innerText).toContain(300);
    expect(summaryTds[2].innerText).toContain(20);
  });

  afterEach(function () {
    billAmt.value = "";
    tipAmt.value = "";
    serverNameInput.value = "";
    allServers = {};
    allPayments = {};
    serverTbody.innerText = "";
    paymentTbody.innerText = "";
    summaryTds.innerText = "";
    updateServerTable();
    updateSummary();
  });
});
