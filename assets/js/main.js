let request = new XMLHttpRequest();

var displayWeatherData = (response) => {
    let jsonResponse = JSON.parse(response);
    $("#data").html(
        `<strong>${jsonResponse.name}, ${jsonResponse.sys.country}<strong>
        <div><strong>Current Weather: </strong>${jsonResponse.weather[0].main}</div>
        <div><strong>Temperature: </strong>${(jsonResponse.main.temp - 273.15).toFixed(1)}°C / ${(jsonResponse.main.temp * (9 / 5) - 459.27).toFixed(1)}°F</div>
        <div><strong>Humidity: </strong>${jsonResponse.main.humidity}%</div>
        <div><strong>Wind: </strong>${jsonResponse.wind.speed}kph</div>`
    );
}


request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayWeatherData(this.responseText);
    }
    else if (this.readyState == 4 && this.status == 404) {
        $("#data").html(
            `We don't have the weather for ${$('#city').val()} yet, enter a real city!`
        );
    }
}

var findWeather = () => {
    let city = $("#city").val();
    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=559f61dad1082432529d0785da372bcc`)
    request.send();
    return false;
}
