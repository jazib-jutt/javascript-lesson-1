var mobiles = [{ model: "vivo11", color: "white", emi: 333 }
    , { model: "vivo11", color: "black", emi: 111 },
{ model: "infinix", color: "blue", emi: 222 }];

function emiSearch() {
    var emi = document.getElementById("emi").value;
    var i = 0;
    var matchitem;
    while (i < mobiles.length) {
        if (mobiles[i].emi == emi) {
            matchitem = mobiles[i];
            break;
        }
        i = i + 1;
    }
    console.log(matchitem)
}

function modelSearch() {
    var model = document.getElementById("model").value;
    var i = 0;
    var matchitems = [];
    while (i < mobiles.length) {
        if (mobiles[i].model == model) {
            matchitems.push(mobiles[i]);
        }
        i = i + 1;
    }
    console.log(matchitems);
    displayOutput(matchitems);
}

function displayOutput(mobiles) {
    var tableBody = document.getElementById("searchItems");
    for (let j = 0; j < mobiles.length; j++) {
        tableBody.innerHTML += `<tr>
        <td>${mobiles[j].model}</td>
        <td>${mobiles[j].color}</td>
        <td>${mobiles[j].emi}</td>
        </tr>`;
        ``
    }

}