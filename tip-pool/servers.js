let serverNameInput = document.getElementById("serverName");
let serverForm = document.getElementById("serverForm");

let serverTbody = document.querySelector("#serverTable tbody");
let serverTable = document.querySelector("#serverTable");

let allServers = {};
let serverId = 0;

serverForm.addEventListener("submit", submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== "") {
    serverId++;
    allServers["server" + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = "";
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = "";

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement("tr");
    newTr.setAttribute("id", key);

    let tipAverage = sumPaymentTotal("tipAmt") / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, "$" + tipAverage.toFixed(2));
    let newTd = document.createElement("td");
    newTd.innerHTML = "<button type='button' id=" + key + ">X</button>";
    newTr.append(newTd);

    serverTbody.append(newTr);
  }
}

function deleteServer(event) {
  const target = $(event.target);
  const closestTd = target.closest("td");
  const parentTr = closestTd.parent();
  parentTr.remove();
}

$("#serverTable").on("click", "button", deleteServer);
