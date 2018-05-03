let request = new XMLHttpRequest();
// XML is part of a markup language 

function displayNicely1(apiData) {
    let dataFrom = JSON.parse(apiData);
    document.getElementById('city-name').innerHTML =
        "<strong>" + dataFrom.name + ", " + dataFrom.sys.country;
}

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    console.log(newData);
    let string1 = "<div><strong>Current Weather: </strong>" + newData.weather[0].main + "</div>"
    string1 += "<div><strong>Temperature: </strong>" + (newData.main.temp - 273.15).toFixed(2) + "C" + " / " + (newData.main.temp * (9/5) - 459.27).toFixed(2) + "F </div>"
    string1 += "<div><strong>Humidity: </strong>" + newData.main.humidity + "% </div>"
    string1 += "<div><strong>Wind: </strong>" + newData.wind.speed + "kph </div>"

    document.getElementById("data").innerHTML =
        string1;
}


request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
        displayNicely1(this.responseText);
        $('a').removeClass("reset");
    } else if 
        (this.readyState == 4 && this.status == 404) {
            document.getElementById("data").innerHTML = 
            "We don't have the weather for Mars yet, enter a real city!";
            $("a").removeClass("reset");
    }
}

function newCity() {
    let city = document.getElementById("city")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=559f61dad1082432529d0785da372bcc")
    request.send();
    return false; 
}
