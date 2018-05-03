// OTHER WAYS OF DOING THE WEATHER API

let request = new XMLHttpRequest();
// XML is part of a markup language 

function displayNicely2(apiData) {
    let dataFrom = JSON.parse(apiData);
    document.getElementById('height').innerHTML =
        "<strong>Height: " + dataFrom.height + "cm";
}

function displayNicely3(apiData) {
    let dataFrom = JSON.parse(apiData);
    document.getElementById('gender').innerHTML =
        "<strong>Gender: " + dataFrom.gender;
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