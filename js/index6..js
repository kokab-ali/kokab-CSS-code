

function checkWeather(temp, israining) {
    if (temp === 20 && israining === false) {
        console.log('normal');
        
    }
    else if (temp <= 20 && israining === true) {
        console.log('is Cold');
        
    }
   else if (temp >= 20 && israining === false) {
         console.log('is Hot');
         
    
   }
   else{
    console.log('temp is not normal');
    
   }
}
checkWeather(5, true)