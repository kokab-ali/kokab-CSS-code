


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
/*AND motorStatus is OFF
→ Print: "Water level very low. TURN ON the motor immediately."

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

Q2

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