let request = new XMLHttpRequest();
// XML is part of a markup language 

function displayNicely1(apiData){
let dataFrom = JSON.parse(apiData);
document.getElementById('city-name').innerHTML = 
"<strong>" + dataFrom.name + ", " +dataFrom.sys.country; 
}

function displayNicely2(apiData){
let dataFrom = JSON.parse(apiData);
document.getElementById('height').innerHTML = 
"<strong>Height: " + dataFrom.height + "cm"; 
}

function displayNicely3(apiData){
let dataFrom = JSON.parse(apiData);
document.getElementById('gender').innerHTML = 
"<strong>Gender: " + dataFrom.gender; 
}

function displayNicely(apiData){
    let newData = JSON.parse(apiData);
    console.log(newData);
    let string1 = "<div><strong>Current Weather: </strong>" + newData.weather[0].main + "</div>"
    string1 += "<div><strong>Temperature: </strong>" + newData.main.temp + "K </div>"
    string1 += "<div><strong>Humidity: </strong>" + newData.main.humidity + "% </div>"
    string1 += "<div><strong>Wind: </strong>" + newData.wind.speed + "kph </div>"
    
    // string1 += "<div><strong>Hair Color: </strong>" + newData.hair_color + "</div>"
    document.getElementById("data").innerHTML = 
    string1;
}
  
// function displayNicely4(apiData) {
//     let newData = JSON.parse(apiData); 
//     let count = 1; 
//     for (let i in newData) {
//         count++;
//         document.getElementById("loops").innerHTML += "<br>" + i +" - " + newData[i] 
//         console.log(newData[i]);
//         if (count ==9) {
//             break;
//         }
//     }
// }    



request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText); 
        displayNicely1(this.responseText);
        // displayNicely2(this.responseText);
        // displayNicely3(this.responseText); 
        // displayNicely4(this.responseText); 
    }
}

function newCity() {
    let city = 
    return "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=6ebea87dfc131fd5402906ce4b098ab8"
}
request.open("GET", newCity())
        request.send();
        
