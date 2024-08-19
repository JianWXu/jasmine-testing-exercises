describe("Helpers test (with setup and tear down)", function () {
  beforeEach(function () {
    //let billAmt = document.getElementById("billAmt");
    //let tipAmt = document.getElementById("billAmt");
    billAmt.value = 1500;
    tipAmt.value = 300;
    submitPaymentInfo();
  });

  it("should group and add bill payment and tip payment together on sumPaymentTotal()", function () {
    // let curPayment = document.getElementById("payment0");
    // let curPaymentRow = curPayment.getElementsByTagName("td")[0];
    //sumPaymentTotal();
    //let billAmtTable = document.getElementById("payment" + paymentId);
    //expect(billAmtTable.innerHTML).toEqual(1500);
    expect(sumPaymentTotal("billAmt")).toEqual(1500);
    expect(sumPaymentTotal("tipAmt")).toEqual(300);
    billAmt.value = 100;
    tipAmt.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(1600);
    expect(sumPaymentTotal("tipAmt")).toEqual(310);
  });

  it("should calculate tip percentage on calculateTipPercent()", function () {
    let tr = document.getElementById("payment" + paymentId);
    let tipAmtTD = tr.getElementsByTagName("td")[1].innerHTML;
    let billAmtTD = tr.getElementsByTagName("td")[0].innerHTML;
    tipAmtTD = tipAmtTD.substring(1);
    billAmtTD = billAmtTD.substring(1);
    expect(
      calculateTipPercent(parseInt(billAmtTD), parseInt(tipAmtTD))
    ).toEqual(20);
  });

  it("should append a new table data inside a table row on appendTd()", function () {
    let newTr = document.createElement("tr");
    appendTd(newTr, 20000);
    appendTd(newTr, "bye");
    appendTd(newTr, "hi");
    expect(newTr.firstChild.innerHTML).toEqual("20000");
    expect(newTr.children[1].innerHTML).toEqual("bye");
    expect(newTr.children[2].innerHTML).toEqual("hi");
  });

  afterEach(function () {
    billAmt.value = "";
    tipAmt.value = "";
    allPayments = {};
    updateServerTable();
    updateSummary();
  });
});
