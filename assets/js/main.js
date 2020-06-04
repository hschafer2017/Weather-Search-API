let request = new XMLHttpRequest();

function displayNicely1(apiData) {
    let dataFrom = JSON.parse(apiData);
    document.getElementById('city-name').innerHTML = 
        `<strong> ${dataFrom.name}, ${dataFrom.sys.country}`;
}

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    document.getElementById("data").innerHTML =
    `<div><strong>Current Weather: </strong>${newData.weather[0].main}</div>
     <div><strong>Temperature: </strong>${(newData.main.temp - 273.15).toFixed(1)}°C / ${(newData.main.temp * (9 / 5) - 459.27).toFixed(1)}°F</div>
     <div><strong>Humidity: </strong>${newData.main.humidity}%</div>
     <div><strong>Wind: </strong>${newData.wind.speed}kph</div>`;
}


request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
        displayNicely1(this.responseText);
        $('a').removeClass("reset");
    }
    else if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML =
            "We don't have the weather for Mars yet, enter a real city!";
        $("a").removeClass("reset");
    }
}

function findWeather() {
    let city = document.getElementById("city").value;
    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=559f61dad1082432529d0785da372bcc`)
    request.send();
    return false;
}
