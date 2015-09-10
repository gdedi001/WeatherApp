// Create play function 
function play() {
    var audio = document.getElementById('audio');
    audio.play();
}

$(document).ready(function() {
    // Prompt client for GPS location
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
    
    $('#btnWeather').on('click', function() {
        if (gpsReady === true)
        {    
            // Request information from OpenWeatherMap API
            connectAPI();
            // Play sound
            play();
            
            // Instantiate new Info object
            var client = new Info(response);
            
            // Gather Tier 1 info
            var iconW = $('<img src="http://openweathermap.org/img/w/' + client.icon + '.png"' + '>');
            var fahrenheit = client.temp + 'ºF';
            console.log(fahrenheit);
            var celsius = $('<span class="info" style="display:none">' + client.tempC() + '</span>');
            
            // Gather Tier 2 info
            var location = client.city;
            var description = client.desc;
            var wind = client.compassDir() + ' ' + client.windSpeed + ' mph';
            
            // Append Tier 1 info
            $('#weatherIcon').append(iconW).hide().show('slow')// Make weather icon show at a slow pace
            $('#temp').append(fahrenheit).hide().show('slow'); // Fahrenheit set as default and show temp at slow pace           
            
            // Append Tier 2 info
            //$('.info').css({'opacity' : '.7'});
            $('#location').append(location);
            $('#description').append(description);
            $('#wind').append(wind);
            
            setTimeout(function(){$('.info').css({'opacity' : '.7'});}, 1000);
            
            
            // Temp change section
            $('#temp').click(function() {
                $('#temp').fadeOut('slow');
            });
            
            
            // Hide animated arrow
            $('#arrwDown').hide();
            // After information has been provided to client, button wiill be disabled
            $('#btnWeather').attr('disabled', true);
            
        } else {
            // alert("Loading GPS information... \nPlease make sure GPS settings are turned on.");
            $('#btnWeather')
        }
    });
});

