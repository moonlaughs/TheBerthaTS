import axios from "../../node_modules/axios";
var output = document.getElementById("output");
var showallUsersButton = document.getElementById("showAllUsersButton");
showallUsersButton.addEventListener("click", showAllUsers);
function showAllUsers() {
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users";
    axios.get(uri)
        .then(function (response) {
        var result = "<ol>";
        response.data.forEach(function (user) {
            result += "<li>" + user.firstName + " " + user.lastName + "</li>";
        });
        result += "</ol>";
        output.innerHTML = result;
    })
        .catch(function (error) {
        if (error.response) {
            output.innerHTML = error;
        }
        else {
            output.innerHTML = error;
        }
    });
}
var showSelectedUser = document.getElementById("showSelectedUser");
showSelectedUser.addEventListener("click", showUser);
function showUser() {
    var selOutput = document.getElementById("selOutput");
    var selInput = document.getElementById("selInput");
    var id = selInput.value;
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users/" + id;
    axios.get(uri)
        .then(function (response) {
        console.log(response.data);
        var result = response.data.firstName;
        selOutput.innerHTML = result;
    })
        .catch(function (error) {
        if (error.response) {
            selOutput.innerHTML = error;
        }
        else {
            selOutput.innerHTML = error;
        }
    });
}
var showSelectedUsersHealthDataButton = document.getElementById("showSelectedUsersHealthData");
showSelectedUsersHealthDataButton.addEventListener("click", showSelUserHealthData);
function showSelUserHealthData() {
    var healthDataInput = document.getElementById("healthDataInput");
    var healthDataOutput = document.getElementById("healthDataOutput");
    var id = healthDataInput.value;
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users/" + id + "/health";
    axios.get(uri)
        .then(function (response) {
        var result = "<table><tr><th>Id</th><th>Blood pressure upper</th><th>Blood pressure down</th><th>Hearth rate</th><th>Temperature</th><th>Date</th>";
        response.data.forEach(function (userHealthData) {
            result += "<tr><td>" + userHealthData.id + "</td><td>" + userHealthData.bloodPressureUpper + "</td><td>" + userHealthData.bloodPressureDown + "</td><td>" + userHealthData.heartRate + "</td><td>" + userHealthData.temperature + "</td><td>" + userHealthData.dateTimeInfo + "</td></tr>";
        });
        result += "</table>";
        healthDataOutput.innerHTML = result;
    })
        .catch(function (error) {
        if (error.response) {
            healthDataOutput.innerHTML = error;
        }
        else {
            healthDataOutput.innerHTML = error;
        }
    });
}
var bloodPressureUInput = document.getElementById("bloodPressureUInput");
var bloodPressureDInput = document.getElementById("bloodPressureDInput");
var heartRateInput = document.getElementById("heartRateInput");
var temperatureInput = document.getElementById("temperatureInput");
var userIdInput = document.getElementById("userIdInput");
var addHealthDataOutput = document.getElementById("addHealthDataOutput");
var addHealthDataButton = document.getElementById("addHealthDataButton");
addHealthDataButton.addEventListener("click", addHealthData);
function addHealthData() {
    var bPUI = Number(bloodPressureUInput.value);
    var bPDI = Number(bloodPressureDInput.value);
    var hRI = Number(heartRateInput.value);
    var tI = Number(temperatureInput.value);
    var uII = Number(userIdInput.value);
    var myDate = new Date();
    var hours = myDate.getHours();
    var dTII = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(), (hours + 1), myDate.getMinutes(), myDate.getSeconds());
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/health";
    axios.post(uri, { bloodPressureUpper: bPUI, bloodPressureDown: bPDI, heartRate: hRI, temperature: tI, userId: uII, dateTimeInfo: dTII })
        .then(function (response) {
        addHealthDataOutput.innerHTML = "Response: " + response.status + " " + response.statusText + "\t";
        addHealthDataOutput.innerHTML += "The health data is added!";
    })
        .catch(function (error) {
        if (error.response) {
            addHealthDataOutput.innerHTML = error;
        }
        else {
            addHealthDataOutput.innerHTML = error;
        }
    });
}
