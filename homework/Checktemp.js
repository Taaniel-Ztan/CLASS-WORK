///CHECK TEMP KODUTÖÖ 1///

//meetod1///


function checkTemp (temp) {
    // let temp = 10;

    if (temp < 21){
        return("Temperatuur on liiga külm")
    }
    if (temp >= 21 && temp <= 40){
        return("Temperatuur on soe")
    }
    if (temp > 40){
        return("Temperatuur on kuum")
    }
}

///meetod2///

function checkTemp (temp) {
//  let temp = 5;

if (temp < 21) {
    return -1
    } 
if(temp >= 21 && temp <= 40) {
    return 0
    } 
if (temp > 41) {
    return 1
    }
}
