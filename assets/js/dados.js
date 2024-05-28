/*cardId= 1;
carYear= 1999;
carMotor= "vtec 1.6 16v";
carTraction= "dianteira";
carPowerCV= 106;
carPowerRPM= 6200;
carTorqueKGFM= 14.2;
carTorqueRPM= 4600;
carZeroToOneHundread= 13.9;
carTopSpeed= 165;*/

function registerCar(cardId, carYear, carMotor, carTraction, carPowerCV, carPowerRPM, carTorqueKGFM, carTorqueRPM, carZeroToOneHundread, carTopSpeed){
    cards.push({
        cardID: cardId,
        ano: carYear,
        motor: carMotor,
        tração: carTraction,
        potencia: `${carPowerCV} cv @ ${carPowerRPM} rpm`, 
        torque: `${carTorqueKGFM} kgfm @ ${carTorqueRPM} rpm`,
        zeroCem: `${carZeroToOneHundread} seg.`,
        topSpeed: `${carTopSpeed} km/h`
    });
}

// registerCar(cardId, carYear, carMotor, carTraction, carPowerCV, carPowerRPM, carTorqueKGFM, carTorqueRPM, carZeroToOneHundread, carTopSpeed)
