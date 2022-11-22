function getweather(location){
    let end = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b6b352b706f78181a7e19c8529c20523`;
    fetch(end)
    .then((response) =>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        displayWeather(data);
    })
    
}
function _(x){
    return document.querySelector(x)
}
const city = _("#cityName");
const temperature = _("#temperature");
const weather = _("#weather");
const humidity = _("#humidity");
const windSpeed = _("#windSpeed");
function displayWeather(data){

    if(data.cod == 200){
    city.innerText = data.name ;
    // let temp =  ;
    temperature.innerText =  ((data.main.temp) - 273.15).toFixed(2) + " °C";
    weather.innerText = " Weather : " + data.weather[0].main ;
    humidity.innerText = "Humdity : " + data.main.humidity + "%" ;
    windSpeed.innerText = "Wind Speed : " + (data.wind.speed * 3.6 ).toFixed(2)+" Km/hr "; 
    changeBack((data.weather[0].main));
    _("#icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    // http://openweathermap.org/img/wn/10d@2x.png
    
        _(".scrollHere").classList.add("disCon");
        _(".listView").classList.add("disCon");
        window.scrollTo(0,window.innerHeight);
    }
    else{
        _(".scrollHere").classList.remove("disCon");
        _(".listView").classList.remove("disCon");
    }
}

function changeBack(weather){
    weather = weather.toLowerCase();
    console.log(weather);
    let key = "clearSky";
    if (weather.includes("rain")){
        key = "rain" ;
        console.log("from rain");
    }
    else if (weather.includes("clear")){
        key = "clearSky" ;
    }
    else if (weather.includes("clouds")){
        key = "clouds" ;
    }
    else if (weather.includes("thunderstorm")){
        key = "thunderstorm" ;
    }
    else if (weather.includes("snow")){
        key = "snow" ;
    }
    else if (weather.includes("mist")){
        key = "mist" ;
    }
    console.log(key);
    _(".item").style.backgroundImage = `url("src/WeatherBackground/${key}.jpg")`
}