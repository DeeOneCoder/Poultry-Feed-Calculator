

function calculateLayerFeed() {

    qty = document.getElementById("quantity").value;
    wk = document.getElementById("week").value;
    var textOutput;

    let weekQuantity = [1, 11, 17, 25, 32, 37, 42, 46, 50, 54, 58, 61, 64, 67, 70, 73, 76, 80, 87, 90, 115];

    if (wk > 21) {
        wk = 20;
    }

    if (qty == null || qty.trim().length == 0 || wk == null || wk.length == 0) {
        document.getElementById("output-cont").className = "alert alert-danger";
        textOutput = "Please fill both fields";
    } else {
        document.getElementById("output-cont").className = "alert alert-success";

        var dailyIntake = weekQuantity[wk];
        var calc = dailyIntake * qty;

        var inBags = (calc / 25000);
        textOutput = "Your " + qty + " layer birds will consume " + inBags + " (25kg) bags per day";

    }

    document.getElementById("output").innerHTML = textOutput;


}

function calculateBroilerFeed() {

    qty = document.getElementById("quantity").value;
    wk = document.getElementById("week").value;
    var textOutput;

    let weekQuantity = [1, 167, 375, 650, 945, 1215, 1434, 1593, 1691, 1715];

    if (wk > 9) {
        wk = 9;
    }
    if (qty == null || qty.trim().length == 0 || wk == null || wk.length == 0) {
        document.getElementById("output-cont").className = "alert alert-danger";
        textOutput = "Please fill both fields";
    } else {
        document.getElementById("output-cont").className = "alert alert-success";

        var dailyIntake = weekQuantity[wk];
        var calc = dailyIntake * qty;

        var inBags = (calc / 25000) / 7;
        textOutput = "Your " + qty + " broiler birds will consume " + inBags + " (25kg) bags per day";

    }

    document.getElementById("output").innerHTML = textOutput;


}


