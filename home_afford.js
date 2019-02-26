var VAT_rate = 1.15;

var transferDuties = [];
var conveyFees = [];
var doLevies = [];

function BaseCost(base, min, max, percent) {
    this.base = base;
    this.min = min;
    this.max = max;
    this.percent = percent;
}

function initTransferDuties() {
    var count = 0;
    transferDuties[count++] = new BaseCost(0, 0, 900000, 0.0);
    transferDuties[count++] = new BaseCost(0, 900001, 1250000, 3.0);
    transferDuties[count++] = new BaseCost(10500, 1250001, 1750000, 6.0);
    transferDuties[count++] = new BaseCost(40500, 1750001, 2250000, 8.0);  
    transferDuties[count++] = new BaseCost(80500, 2250001, 10000000, 11.0);
    transferDuties[count++] = new BaseCost(933000, 10000001, Infinity, 13.0);
}

function initConveyFees() {
    var count = 0;
    conveyFees[count++] = new BaseCost(12150, 0, 600000, 0.0);
    conveyFees[count++] = new BaseCost(12360, 600001, 700000, 0.0);
    conveyFees[count++] = new BaseCost(15090, 700001, 800000, 0.0);
    conveyFees[count++] = new BaseCost(16560, 800001, 900000, 0.0);
    conveyFees[count++] = new BaseCost(18030, 900001, 1000000, 0.0);
    conveyFees[count++] = new BaseCost(18765, 1000001, 1100000, 0.0);
    conveyFees[count++] = new BaseCost(19500, 1100001, 1200000, 0.0);
    conveyFees[count++] = new BaseCost(20235, 1200001, 1300000, 0.0);
    conveyFees[count++] = new BaseCost(20970, 1300001, 1400000, 0.0);
    conveyFees[count++] = new BaseCost(21705, 1400001, 1500000, 0.0);
    conveyFees[count++] = new BaseCost(22440, 1500001, 1600000, 0.0);
    conveyFees[count++] = new BaseCost(23175, 1600001, 1700000, 0.0);
    conveyFees[count++] = new BaseCost(23910, 1700001, 1800000, 0.0);
    conveyFees[count++] = new BaseCost(24645, 1800001, 1900000, 0.0);
    conveyFees[count++] = new BaseCost(25380, 1900001, 2000000, 0.0);
    conveyFees[count++] = new BaseCost(26115, 2000001, 2100000, 0.0);
    conveyFees[count++] = new BaseCost(26850, 2100001, 2200000, 0.0);
    conveyFees[count++] = new BaseCost(27585, 2200001, 2300000, 0.0);
    conveyFees[count++] = new BaseCost(28320, 2300001, 2400000, 0.0);
    conveyFees[count++] = new BaseCost(29055, 2400001, 2500000, 0.0);
    conveyFees[count++] = new BaseCost(29790, 2500001, 2600000, 0.0);
    conveyFees[count++] = new BaseCost(30525, 2600001, 2700000, 0.0);
    conveyFees[count++] = new BaseCost(31260, 2700001, 2800000, 0.0);
    conveyFees[count++] = new BaseCost(31995, 2800001, 2900000, 0.0);
    conveyFees[count++] = new BaseCost(32730, 2900001, 3000000, 0.0);
    conveyFees[count++] = new BaseCost(33465, 3000001, 3100000, 0.0);
    conveyFees[count++] = new BaseCost(34200, 3100001, 3200000, 0.0);
    conveyFees[count++] = new BaseCost(34935, 3200001, 3300000, 0.0);
    conveyFees[count++] = new BaseCost(35670, 3300001, 3400000, 0.0);
    conveyFees[count++] = new BaseCost(36405, 3400001, 3500000, 0.0);
    conveyFees[count++] = new BaseCost(37140, 3500001, 3600000, 0.0);
    conveyFees[count++] = new BaseCost(37875, 3600001, 3700000, 0.0);
    conveyFees[count++] = new BaseCost(38610, 3700001, 3800000, 0.0);
    conveyFees[count++] = new BaseCost(39345, 3800001, 3900000, 0.0);
    conveyFees[count++] = new BaseCost(40080, 3900001, 4000000, 0.0);
    conveyFees[count++] = new BaseCost(40815, 4000001, 4100000, 0.0);
    conveyFees[count++] = new BaseCost(41550, 4100001, 4200000, 0.0);
    conveyFees[count++] = new BaseCost(42285, 4200001, 4300000, 0.0);
    conveyFees[count++] = new BaseCost(43020, 4300001, 4400000, 0.0);
    conveyFees[count++] = new BaseCost(43755, 4400001, 4500000, 0.0);
    conveyFees[count++] = new BaseCost(44490, 4500001, 4600000, 0.0);
    conveyFees[count++] = new BaseCost(45225, 4600001, 4700000, 0.0);
    conveyFees[count++] = new BaseCost(45960, 4700001, 4800000, 0.0);
    conveyFees[count++] = new BaseCost(46695, 4800001, 4900000, 0.0);    
    conveyFees[count++] = new BaseCost(47430, 4900001, 5000000, 0.0);
    // +370
    conveyFees[count++] = new BaseCost(47800, 5000001, 5100000, 0.0);
    var v1 = conveyFees[count-1].max;
    while (v1 <= 30000000) {
        conveyFees[count] =
            new BaseCost(conveyFees[count-1].base + 370, v1 + 1, v1 + 100000, 0.0);
        v1 += 100000;
        ++count;
    }
    conveyFees[count++] = new BaseCost(3533000, 30000001, Infinity, 0.0);
}

function initDeedsOfficeLevies() {
    var count = 0;
    doLevies[count++] = new BaseCost(606,  600000, 0);
    doLevies[count++] = new BaseCost(852,  600001, 800000, 0);
    doLevies[count++] = new BaseCost(978,  800001, 1000000, 0);
    doLevies[count++] = new BaseCost(1098, 100001, 2000000, 0);
    doLevies[count++] = new BaseCost(1522, 200001, 4000000, 0);
    doLevies[count++] = new BaseCost(1846, 400001, 6000000, 0);
    doLevies[count++] = new BaseCost(2197, 600001, 8000000, 0);
    doLevies[count++] = new BaseCost(2568, 800001, 10000000, 0);
    doLevies[count++] = new BaseCost(3057, 1000001, 15000000, 0);
    doLevies[count++] = new BaseCost(3671, 1500001, 20000000, 0);
    doLevies[count++] = new BaseCost(4890, 2000001, Infinity, 0);    
}

function calculateGradeCost(value, costArray, initFunc) {
    var cost = 0.0
    if (costArray.length == 0) {
        initFunc();
    }
    if (value > 0) {
        for (var k in costArray) {
            if (value <= costArray[k].max) {
                cost = costArray[k].base;
                if (costArray[k].percent > 0) {
                    cost += ((value - costArray[k].min) * costArray[k].percent/100.0);
                }
                break;
            }
        }
    }
    return Math.ceil(cost);
}

function calculateTransferDuty(value) {
    return calculateGradeCost(value, transferDuties, initTransferDuties);
}

function calculateConveyFee(value) {
    return Math.ceil(
        calculateGradeCost(value, conveyFees, initConveyFees) * VAT_rate);
}

function calculateDeedsOfficeLevy(value) {
    return calculateGradeCost(value, doLevies, initDeedsOfficeLevies);
}

function calculateBondInitFee(value) {
    // TODO
    return 0;
}

function calculatePandP(value) {
    return 1100;
}

function getFunding(input) {
    var cash = 0;
    var bond = 0;
    if (input) {
        //var val = document."formdata".getElementById("calcCashAmount").value;
        cash = getNumber(document.formdata.cashAmount.value);
        bond = getNumber(document.formdata.bondAmount.value);
    } else {
        cash = getNumber(document.formdata.calcCashAmount.value);
        bond = getNumber(document.formdata.calcBondAmount.value);
    }
    return (cash + bond);
}

function getTransferCosts(input) {
    var total = 0;
    var convey = 0;
    var transfer = 0;
    var doLevy = 0;

    if (input) {
        convey = Math.ceil(getNumber(document.formdata.conveyFee.value) * VAT_rate);
        transfer = getNumber(document.formdata.transferDuty.value);
        doLevy = getNumber(document.formdata.doLevy.value);
    } else {
        convey = Math.ceil(getNumber(document.formdata.calcConveyFee.value) * VAT_rate);
        transfer = getNumber(document.formdata.calcTransferDuty.value);
        doLevy = getNumber(document.formdata.calcDoLevy.value);
    }
    
    var petties = getNumber(document.formdata.transferPetties.value);
    
    total = convey + transfer + doLevy + petties;
    
    return total;
}

function getBondCosts(input) {
    var total = 0;
    var convey = 0;
    var doFee = 0;
    var initFee = 0;
    if (input) {
        if (getNumber(document.formdata.bondAmount.value) > 0) {
            convey = getNumber(document.formdata.bondConveyFee.value) * VAT_rate;
            doFee = getNumber(document.formdata.doBondFee.value);
        }
    } else {
        if (getNumber(document.formdata.calcBondAmount.value) > 0) {
            convey = getNumber(document.formdata.calcBondConveyFee.value) * VAT_rate;
            doFee = getNumber(document.formdata.calcDoBondFee.value);
        }
    }

    // use manual entries verbatim from input
    var initFee = getNumber(document.formdata.initBondFee.value);
    var petties = getNumber(document.formdata.bondPetties.value);
        
    total = convey + doFee + initFee + petties;
    return total;
}

function applyTransferCosts(funds, input) {
    var duty = calculateTransferDuty(funds);
    var convey = calculateConveyFee(funds);
    var levy = calculateDeedsOfficeLevy(funds);
    var petties = getNumber(document.formdata.transferPetties.value);
    if (convey > 0 && petties == 0) {
        petties = calculatePandP(funds);
    }
    
    var costs = duty + convey + levy + petties;
    
    if (input) {
        document.formdata.transferDuty.value = numberWithCommas(duty);
        document.formdata.conveyFee.value = numberWithCommas(convey);
        document.formdata.doLevy.value = numberWithCommas(levy);
        document.formdata.transferPetties.value = numberWithCommas(petties);
    } else {
        document.formdata.calcTransferDuty.value = numberWithCommas(duty);
        document.formdata.calcConveyFee.value = numberWithCommas(convey);
        document.formdata.calcDoLevy.value = numberWithCommas(levy);
        document.formdata.calcTransferPetties.value = numberWithCommas(petties);
    }
    
    return costs;
}

function applyBondCosts(bondVal, input) {
    var costs = 0;
    if (getNumber(document.formdata.bondAmount.value) == 0) {
        document.formdata.bondConveyFee.value =
            document.formdata.doBondFee.value = 
            document.formdata.initBondFee.value =
            document.formdata.bondPetties.value = "0.00";
        document.formdata.calcBondAmount.value = "0.00";
        document.formdata.calcBondConveyFee.value =
            document.formdata.calcDoBondFee.value = 
            document.formdata.calcInitBondFee.value =
            document.formdata.calcBondPetties.value = "0.00";
        return 0;
    }
    
    var convey = 0;
    var duty = 0;

    // --- manually entered values used verbatim for both sides  ---
    var initFee = getNumber(document.formdata.initBondFee.value);
    var petties = getNumber(document.formdata.bondPetties.value);
    if (petties == 0) {
        petties = calculatePandP(bondVal);
    }
    
    if (input) {
        //bondVal = getNumber(document.formdata.bondAmount.value);
        convey = calculateConveyFee(bondVal);
        document.formdata.bondConveyFee.value = numberWithCommas(convey);
        duty = calculateDeedsOfficeLevy(bondVal);
        document.formdata.doBondFee.value = numberWithCommas(duty);
        document.formdata.initBondFee.value = numberWithCommas(initFee);
        document.formdata.bondPetties.value = numberWithCommas(petties);
    } else {
        //bondVal = getNumber(document.formdata.calcBondAmount.value);
        convey = calculateConveyFee(bondVal);
        document.formdata.calcBondConveyFee.value = numberWithCommas(convey);
        duty = calculateDeedsOfficeLevy(bondVal);
        document.formdata.calcDoBondFee.value = numberWithCommas(duty);
        document.formdata.calcInitBondFee.value = numberWithCommas(initFee);
        document.formdata.calcBondPetties.value = numberWithCommas(petties);
    }

    costs = convey + duty + initFee + petties;
    
    return costs;
}

function applyButtonCallback() {
    document.formdata.cashAmount.value =
        numberWithCommas(getNumber(document.formdata.cashAmount.value));
    document.formdata.bondAmount.value =
        numberWithCommas(getNumber(document.formdata.bondAmount.value));
    var funds = getFunding(true);
    applyTransferCosts(funds, true);
    applyBondCosts(funds, true);
}

function calculateMaxAffordableBond(cash, startVal, funds) {
    var bond = startVal - (startVal%1000) + 1000;  // step 1000
    var maxBond = startVal;
    var total = bond + cash;
    var initFee = getNumber(document.formdata.initBondFee.value);
    var petties = getNumber(document.formdata.transferPetties.value) +
                    getNumber(document.formdata.bondPetties.value);
    
    while (total < funds) {
        var value = cash + bond;
        var convey = calculateConveyFee(value) + calculateConveyFee(bond);
        var duty = calculateTransferDuty(value);
        var levy = calculateDeedsOfficeLevy(value) + calculateDeedsOfficeLevy(bond);
        var costs = convey + duty + levy + initFee + petties;
        if (bond + costs + cash > funds) {
            break;
        }
        maxBond = bond;
        total = bond + cash;
        bond += 1000;    // step 1000
    }
    return Math.floor(maxBond);
}

function calcValuesCallback(amount) {
    var cash = getNumber(document.formdata.cashAmount.value);
    cash = Math.min(cash, amount);
    document.formdata.calcCashAmount.value = numberWithCommas(cash);
    var bond = Math.max(amount - cash, 0);
    
    bond = calculateMaxAffordableBond(cash, bond, getFunding(true));
    //alert("Max value: " + bond2);
    
    document.formdata.calcOfferAmount.value = numberWithCommas(cash + bond);
    
    document.formdata.calcBondAmount.value = numberWithCommas(bond);
    var funds = getFunding(false);
    var bondCosts = applyBondCosts(bond, false);
    //alert("using bond costs: " + costs);
    var transferCosts = applyTransferCosts(funds, false);
    var total = funds + bondCosts + transferCosts;
    total = Math.ceil(total);
    document.formdata.calcTotal.value = numberWithCommas(total);
}

function calculate() {
    applyButtonCallback();  // apply latest funds values
    var total = 0;
    var funds = getFunding(true);
    if (funds <= 0) {
        alert("No funding available!");
        return 0;
    }
    total += funds;
    var costs = getTransferCosts(true) + getBondCosts(true);
    funds -= costs;
    total += costs;
    //total = total.toFixed(2);
    funds = Math.ceil(Math.max(funds, 0));
    total = Math.ceil(Math.max(total, 0));
    document.formdata.total.value = numberWithCommas(total);
    calcValuesCallback(funds);
    //alert("You can afford: " + numberWithCommas(funds));
    return funds;
}