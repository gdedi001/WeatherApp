var weatherURL = "";
var gpsReady = false;
var response;
        
//navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
function locationSuccess(position)
{
    var lat = position.coords.latitude.toString();
    var lon = position.coords.longitude.toString();
    weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon;
    console.log(weatherURL);
    gpsReady = true;
}

function locationFail()
{
    alert("Unable to find current location. Please try again.");   
}

function connectAPI()
{
    var xhr = new XMLHttpRequest(); // Create new request object
    xhr.open('GET', weatherURL, false); // Initializes a request.
    xhr.send(); // Send the request that was created

    // The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object.
    response = JSON.parse(xhr.response);
    console.log(response); 
}

// Function that converts the default Kelvin temperature to Fahrenheit
function convertToF(kelvinTemp) {
    return 1.8 * (kelvinTemp - 273) + 32;
}

// Function that converts the default Kelvin temperature to Celsius
function convertToC(kelvinTemp) {
    return kelvinTemp - 273.15;
}

// Function that converts the wind direction from default degrees to a rough estimate compass direction 
function compassDeg(windDir) {
    if (windDir < 30 || (windDir > 330 && windDir <= 360)) {
        return 'N';  
        
    } else if (windDir >= 30 && windDir <= 60) {
        return 'NE';  
        
    } else if (windDir > 61 && windDir < 120) {
        return 'E';   
        
    } else if (windDir >= 120 && windDir <= 150) {
        return 'SE';   
        
    } else if (windDir > 151 && windDir < 210) {
        return 'S';  
        
    } else if (windDir >= 210 && windDir <= 240) {
        return 'SW';   
        
    } else if (windDir > 241 && windDir < 300) {
        return 'W';   
        
    } else {
        return 'NW';
    }
}

