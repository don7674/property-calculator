// stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");  // O'Reilly p.154
    return parts.join(".");
}

function getNumber(strVal) {
    var sv = strVal.trim();
    sv = sv.replace(/ /g, "");  // O'Reilly p.156
    sv = sv.replace(/,/g, "");
    var number = Number(sv);
    if (isNaN(number)) {
        number = 0;
    }
    return number;
}