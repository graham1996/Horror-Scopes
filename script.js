const successCallback = (position) => {
    console.log(position);
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
};
const errorCallback = (error) => {
    console.error(error);
};
const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);
var formEl = $('.birth-form');
var birthdayEl = $('input[name="birthday"]');
var birthTimeEl = $('input[name="birth-time"]');
var nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=";
var nasaKey = "Bb0VibPKgDQeWj6rnb7xN5ueIK4ykbqnkoSRzonS";
var moonKey = "a7ff106b7692ff39d83d685ee3bd714b";
var moonUrl = "https://api.openweathermap.org/data/2.5/onecall?";
var moonLat = localStorage.getItem('latitude');
var moonLon = localStorage.getItem('longitude');
var moonPhaseEl = $('#moon-phase');
console.log(moonLon);
console.log(moonLat);
fetch(nasaUrl + nasaKey + '&count=1&thumbs', {
})
    .then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data);
                console.log(data[0].url);
                randomImageUrl = data[0].url;
                document.getElementById('random-image').setAttribute('src', randomImageUrl)
            })
    });
fetch('https://api.le-systeme-solaire.net/rest/bodies/', {
})
    .then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data);
            })
    })
fetch(moonUrl + "lat=" + moonLat + "&lon=" + moonLon + "&appid=" + moonKey, {
})
    .then(function (response) {
        return response.json()
            .then(function (data) {
                console.log(data);
                console.log(data.daily[0].moon_phase);
                localStorage.setItem("moon_phase", data.daily[0].moon_phase);
            })
    })
var moonPhase = localStorage.getItem("moon_phase");
console.log(moonPhase);
if (moonPhase === 0) {
    console.log("new moon");
    moonPhaseEl.text("new moon");
}
else if (moonPhase < 0.25) {
    console.log("waxing crescent");
    moonPhaseEl.text("waxing crescent");
}
else if (moonPhase < 0.26) {
    console.log("first quarter");
    moonPhaseEl.text("first quarter");
}
else if (moonPhase < 0.5) {
    console.log("waxing gibbous");
    moonPhaseEl.text("waxing gibbous");
}
else if (moonPhase < 0.51) {
    console.log("full moon");
    moonPhaseEl.text("full moon");
}
else if (moonPhase < 0.75) {
    console.log("waning gibbous");
    moonPhaseEl.text("waning gibbous");
}
else if (moonPhase < 0.76) {
    console.log("last quarter");
    moonPhaseEl.text("last quarter");
}
else if(moonPhase){
    console.log("waning crescent");
    moonPhaseEl.text("waning crescent");
}
else{
    moonPhaseEl.text("You dont care about the moon :(")
}
var date = document.getElementById('time-and-date');
function setTime() {
    var timerInterval = setInterval(function () {
        date.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        return;
    }, 50)
}
setTime();
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.0;
    audio.play();
});
//199 uranus 219 neptune 238 jupiter 239 mars 240 mercury 241 saturn 242 sun 243 earth 244 venus
