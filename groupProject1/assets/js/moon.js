fetch(nasaUrl + 'regulus', {}).then(function (response) {
    return response.json().then(function (data) {
       console.log(data);
    });
 });
 fetch('https://api.le-systeme-solaire.net/rest/bodies/', {}).then(function (
    response
 ) {
    return response.json().then(function (data) {
       console.log(data);
    });
 });
 fetch(moonUrl + 'lat=1' + '&lon=1' + '&appid=' + moonKey, {}).then(function (
    response
 ) {
    return response.json().then(function (data) {
       console.log(data);
       console.log(data.daily[0].moon_phase);
       localStorage.setItem('moon_phase', data.daily[0].moon_phase);
    });
 });
 var moonPhase = localStorage.getItem('moon_phase');
 console.log(moonPhase);
 
 window.onload = function () {
    setTime();
 
    moonEl = document.getElementById('moon');
    if (moonPhase === 0) {
       console.log('new moon');
       moonEl.setAttribute('src', '../images/newmoon.png');
    } else if (moonPhase < 0.25) {
       console.log('waxing crescent');
       moonEl.setAttribute('src', '../images/waxingcrescent.png');
    } else if (moonPhase < 0.26) {
       console.log('first quarter');
       moonEl.setAttribute('src', '../images/firstquarter.png');
    } else if (moonPhase < 0.5) {
       console.log('waxing gibbous');
       moonEl.setAttribute('src', '../images/waxinggibbous.png');
    } else if (moonPhase < 0.51) {
       console.log('full moon');
       moonEl.setAttribute('src', '../images/fullmoon.png');
    } else if (moonPhase < 0.75) {
       console.log('waning gibbous');
       moonEl.setAttribute('src', '../images/waninggibbous.png');
    } else if (moonPhase < 0.76) {
       console.log('last quarter');
       moonEl.setAttribute('src', '../images/lastquarter.png');
    } else if (moonPhase) {
       console.log('waning crescent');
       moonEl.setAttribute('src', '../images/waningcrescent.png');
    } else {
       moonPhaseEl.text('You dont care about the moon :(');
    }
 };