describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("shouldn't add a new server to allServers on submitServerInfo()", function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should add two servers to allServers on submitServerInfo()", function () {
    submitServerInfo();
    serverNameInput.value = "Bob";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(2);
  });

  it("should attach a new table row for curServer on updateServerTable()", function () {
    submitServerInfo();
    let serverName = document.getElementById("server" + serverId);
    expect(serverName.innerHTML).toContain("Alice");
    expect(serverTbody.innerHTML).toContain("$0.00");
  });

  it("should delete the server attached to delete button on deleteServer()", function () {
    serverNameInput.value = "Bob";
    submitServerInfo();
    expect(serverTbody.children.length).toEqual(1);
    expect(serverTbody.innerHTML).toContain("X");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
    allServers = {};
  });
});
