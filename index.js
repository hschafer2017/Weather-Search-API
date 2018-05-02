let request = new XMLHttpRequest();
// XML is part of a markup language 

function displayNicely1(apiData){
let dataFrom = JSON.parse(apiData);
document.getElementById('weight').innerHTML = 
"<strong>Weight: " + dataFrom.mass + "kg"; 
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
    let string1 = "<div><strong>Name: </strong> " + newData.name + "</div>"
    string1 += "<div><strong>Weight: </strong>" + newData.mass + "</div>"
    string1 += "<div><strong>Height: </strong>" + newData.height + "</div>"
    string1 += "<div><strong>Gender: </strong>" + newData.gender + "</div>"
    string1 += "<div><strong>Hair Color: </strong>" + newData.hair_color + "</div>"
    document.getElementById("data").innerHTML = 
    string1;
}
  
function displayNicely4(apiData) {
    let newData = JSON.parse(apiData); 
    let count = 1; 
    for (let i in newData) {
        count++;
        document.getElementById("loops").innerHTML += "<br>" + i +" - " + newData[i] 
        console.log(newData[i]);
        if (count ==9) {
            break;
        }
    }
}    



request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText); 
        // displayNicely1(this.responseText);
        // displayNicely2(this.responseText);
        // displayNicely3(this.responseText); 
        displayNicely4(this.responseText); 
    }
}

request.open("GET", "https://swapi.co/api/people/1")
        request.send();
