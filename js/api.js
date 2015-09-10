var weatherURL = "";
var gpsReady = false;
var response;
        
//navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
function locationSuccess(position) {
    
    var lat = position.coords.latitude.toString();
    var lon = position.coords.longitude.toString();
    weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial";
    console.log(weatherURL);
    gpsReady = true;
}

function locationFail() {
    
    alert("Unable to find current location. Please try again.");   
}

function connectAPI() {
    
    var xhr = new XMLHttpRequest(); // Create new request object
    xhr.open('GET', weatherURL, false); // Initializes a request.
    xhr.send(); // Send the request that was created

    // The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object.
    response = JSON.parse(xhr.response);
    console.log(response); 
}

function Info(response) {
    this.temp = Math.round(response.main.temp);
    this.city = response.name + ", " + response.sys.country;
    this.desc = response.weather[0].description;
    this.icon = response.weather[0].icon;
    this.windSpeed = response.wind.speed;
    this.windDir = response.wind.deg;
}

// Create prototype to conserve memory
Info.prototype = {
    // Function that converts the temperature to Celsius
    tempC: function() {
        return Math.round(this.temp - 273.15) + '°C';   
    },
    
    // Function that converts the wind direction from default degrees to a rough estimate compass direction 
    compassDir: function() {
        if (this.windDir < 30 || (this.windDir > 330 && this.windDir <= 360)) {
            return '~N';  

        } else if (this.windDir >= 30 && this.windDir <= 60) {
            return '~NE';  

        } else if (this.windDir > 61 && this.windDir < 120) {
            return '~E';   

        } else if (this.windDir >= 120 && this.windDir <= 150) {
            return '~SE';   

        } else if (this.windDir > 151 && this.windDir < 210) {
            return '~S';  

        } else if (this.windDir >= 210 && this.windDir <= 240) {
            return '~SW';   

        } else if (this.windDir > 241 && this.windDir < 300) {
            return '~W';   

        } else {
            return '~NW';
        }
    }
};

