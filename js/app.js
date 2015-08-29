var client = new XMLHttpRequest(); // Create new request object
client.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139', false); // Initializes a request.
client.send(); // Send the request that was created

var response = JSON.parse(client.response); // The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object.

console.log(response);

// Function that converts the default Kelvin temperature to Fahrenheit
function convertToF(kelvinTemp){
    return 1.8 * (kelvinTemp - 273) + 32;
}

// Function that converts the default Kelvin temperature to Celsius
function convertToC(kelvinTemp){
    return kelvinTemp - 273.15;
}

