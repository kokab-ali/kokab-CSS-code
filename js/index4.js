


function squares(number1, number2,) { // num1 and num2 ki vallue (20, 40,) 
    let square = number1 * number1; // square = 20, x 20 = 400;
    let square2 = number2 * number2; // square2 = 40, x 40 = 1600;
    let square3 = square - square2; // square = 400, - 1600;
    return console.log(square3); // return -1200;
    
}

squares(20, 40,)

// create a function wich tell how many deegres are neended to reach temrature 20 deegre if temerturte 20 > deegre then tell to turn the ac on;

function temp(deegres) {
    let deegre = 20;
    if (deegres < 20) {
        console.log('turnAcOff');
        
    }
    else console.log('turnAcOn');
    
}
temp(20)

// If the water level is below 20%
/*AND motorStatus is OFF. TURN ON the motor immediately."

→ Print: "Water level very low
If the water level is between 20% and 50% (inclusive)
AND it is NOT raining (isRainy === false)
→ Print: "Water level is moderate. Motor can stay ON if needed."

If the water level is above 50% and below 80%
→ Print: "Water level is good. Keep motor OFF to save energy."

If the water level is 80% or above
→ Print: "Tank almost full. TURN OFF motor now!"

If it is raining
AND water level is above 40%
AND motorStatus is ON
→ Print: "Rain detected. Switching OFF motor to avoid overflow."

If none of the conditions match
→ Print: "System running normally. No action needed."*/




function waterLevel() {
    let waterLevel = 20;
    let Motor = 'Off';
    let isRainy = false;

    if (waterLevel < 20 && Motor === 'Off') {
        console.log("The water level is very low. Turn on the motor immediately.");
        
    }
    else if (waterLevel >= 20 && waterLevel <= 50 && isRainy === false) {
        console.log("The water level is moderate. The motor can be kept ON if needed.");
        
    }
    else if (waterLevel > 50 && waterLevel < 80) {
        console.log("The water level is good. Keep the motor OFF to save energy.");
        
    }
    else if (waterLevel >= 80) {
        console.log("The tank is almost full. Turn off the motor now!");
        
    }
    else if (isRainy === true && waterLevel > 40 && Motor === 'On') {
        console.log("Rain detected. Turning off the motor to avoid overflow.");
        
    }
    else{
        console.log("The system is running normally. No action is needed.");
        
    }
    

}


waterLevel()


/*Rules to Implement:
1. If the battery level is below 10%

AND the device is NOT charging (isCharging === false)
→ Print:
"Battery critically low! Enable Ultra Power Saving Mode and reduce brightness to 10%."

2. If battery level is between 10% and 30% (inclusive)

AND powerSavingMode is OFF
→ Print:
"Battery low. Turn ON Power Saving Mode and lower brightness."

3. If battery level is between 30% and 60%

AND brightness is higher than 70%
→ Print:
"Battery okay but brightness is too high. Suggest lowering it."

4. If battery level is 60% or above

AND the device IS charging
→ Print:
"Battery healthy. You may unplug the charger soon."

5. If the battery is fully charged (100%)

AND charging is still ON
→ Print:
"Battery full! Disconnect charger to protect battery health."

6. If powerSavingMode is ON

AND (battery > 50% OR device is charging)
→ Print:
"Power Saving Mode active, but may not be necessary now."

7. If none of the conditions match

→ Print:
"System normal. No changes required."*/



   




function BatteryStatus(batteryLevel, isCharging, brightness, powerSavingMode) {
    

    if (batteryLevel < 10 && !isCharging) {
        console.log("Battery is critically low! Turn on Ultra Power Saving Mode and reduce brightness to 10%.");
    }
    else if (batteryLevel >= 10 && batteryLevel <= 30 && !powerSavingMode) {
        console.log("Battery is low. Turn ON Power Saving Mode and lower the brightness.");
    }
    else if (batteryLevel > 30 && batteryLevel <= 60 && brightness > 70) {
        console.log("Battery is okay, but the brightness is too high. It is recommended to lower it.");
    }
    else if (batteryLevel >= 60 && isCharging) {
        console.log("Battery is healthy. You may unplug the charger soon.");
    }
    else if (batteryLevel === 100 && isCharging) {
        console.log("Battery is full! Disconnect the charger to maintain battery health.");
    }
    else if (powerSavingMode && (batteryLevel > 50 || isCharging)) {
        console.log("Power Saving Mode is active, but it may not be necessary right now.");
    }
    else {
        console.log("The system is normal. No changes are required.");
    }
}


BatteryStatus(55, true, 45, false)
