import axios from "../../node_modules/axios";
var allButton = document.getElementById("allButton");
allButton.addEventListener("click", getAllEnv);
function getAllEnv() {
    var envOutput2 = document.getElementById("envOutput2");
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/environment";
    axios.get(uri)
        .then(function (response) {
        var result = "<table><tr><th>Id</th><th>Oxygen</th><th>Co2</th><th>Co</th><th>Pm25</th><th>Pm10</th><th>Ozon</th><th>Dust Particles</th><th>Nitrogen Dioxide</th><th>Sulphur Dioxide</th><th>Longitute</th><th>Latitute</th><th>User Id</th><th>Date</th>";
        response.data.forEach(function (envD) {
            result += "<tr><td>" + envD.id + "</td><td>" + envD.oxygen + "</td><td>" + envD.co2 + "</td><td>" + envD.co + "</td><td>" + envD.pm25 + "</td><td>" + envD.pm10 + "</td><td>" + envD.ozon + "</td><td>" + envD.dustParticles + "</td><td>" + envD.nitrogenDioxide + "</td><td>" + envD.sulphurDioxide + "</td><td>" + envD.longitude + "</td><td>" + envD.latitude + "</td><td>" + envD.userId + "</td><td>" + envD.dateTimeInfo + "</td></tr>";
        });
        result += "</table>";
        envOutput2.innerHTML = result;
    })
        .catch(function (error) {
        if (error.response) {
            envOutput2.innerHTML = error;
        }
        else {
            envOutput2.innerHTML = error;
        }
    });
}
var getAllButton = document.getElementById("getAllButton");
getAllButton.addEventListener("click", getEnvData);
function getEnvData() {
    var envInput = document.getElementById("envInput");
    var envOutput = document.getElementById("envOutput");
    var id = envInput.value;
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users/" + id + "/environment";
    axios.get(uri)
        .then(function (response) {
        var result = "<table><tr><th>Id</th><th>Oxygen</th><th>Co2</th><th>Co</th><th>Pm25</th><th>Pm10</th><th>Ozon</th><th>Dust Particles</th><th>Nitrogen Dioxide</th><th>Sulphur Dioxide</th><th>Longitute</th><th>Latitute</th><th>User Id</th><th>Date</th>";
        response.data.forEach(function (env) {
            result += "<tr><td>" + env.id + "</td><td>" + env.oxygen + "</td><td>" + env.co2 + "</td><td>" + env.co + "</td><td>" + env.pm25 + "</td><td>" + env.pm10 + "</td><td>" + env.ozon + "</td><td>" + env.dustParticles + "</td><td>" + env.nitrogenDioxide + "</td><td>" + env.sulphurDioxide + "</td><td>" + env.longitude + "</td><td>" + env.latitude + "</td><td>" + env.userId + "</td><td>" + env.dateTimeInfo + "</td></tr>";
        });
        result += "</table>";
        envOutput.innerHTML = result;
    })
        .catch(function (error) {
        if (error.response) {
            envOutput.innerHTML = error;
        }
        else {
            envOutput.innerHTML = error;
        }
    });
}
var addOxInput = document.getElementById("addOxInput");
var addCo2Input = document.getElementById("addCo2Input");
var addCoInput = document.getElementById("addCoInput");
var addPm25Input = document.getElementById("addPm25Input");
var addPm10Input = document.getElementById("addPm10Input");
var addOzInput = document.getElementById("addOzInput");
var addDPInput = document.getElementById("addDPInput");
var addNDInput = document.getElementById("addNDInput");
var addSDInput = document.getElementById("addSDInput");
var addLonInput = document.getElementById("addLonInput");
var addLanInput = document.getElementById("addLanInput");
var addUIInput = document.getElementById("addUIInput");
var envOutput = document.getElementById("envOutput");
var addEnvButton = document.getElementById("addEnvButton");
addEnvButton.addEventListener("click", addEnvData);
function addEnvData() {
    var addOx = Number(addOxInput.value);
    var addCo2 = Number(addCo2Input.value);
    var addCo = Number(addCoInput.value);
    var addPm25 = Number(addPm25Input.value);
    var addPm10 = Number(addPm10Input.value);
    var addOz = Number(addOzInput.value);
    var addDP = Number(addDPInput.value);
    var addND = Number(addNDInput.value);
    var addSD = Number(addSDInput.value);
    var addLon = Number(addLonInput.value);
    var addLan = Number(addLanInput.value);
    var addUI = Number(addUIInput.value);
    var myDate = new Date();
    var hours = myDate.getHours();
    var dTII = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(), (hours + 1), myDate.getMinutes(), myDate.getSeconds());
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/environment";
    axios.post(uri, { oxygen: addOx, co2: addCo2, co: addCo, pm25: addPm25, pm10: addPm10, ozon: addOz, dustParticles: addDP, nitrogenDioxide: addND, sulphurDioxide: addSD, longitude: addLon, latitude: addLan, userId: addUI, dateTimeInfo: dTII })
        .then(function (response) {
        envOutput.innerHTML = "Response: " + response.status + " " + response.statusText + "\t";
        envOutput.innerHTML += "The environment data is added!";
    })
        .catch(function (error) {
        if (error.response) {
            envOutput.innerHTML = error;
        }
        else {
            envOutput.innerHTML = error;
        }
    });
}
