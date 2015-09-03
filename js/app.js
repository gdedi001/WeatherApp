$(document).ready(function() {
    // Ask client for their GPS location
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
    $('#btnWeather').on('click', function(){
        if (gpsReady === true)
        {
            connectAPI(); // request information from OpenWeatherMap API
        } 
        else 
        {
            alert("We are gathering your GPS information. Please try again in about 15 seconds!");
        }
    });
});

