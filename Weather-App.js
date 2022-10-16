const apiKey = "0a54cd411387555c33b02d720cb50ed2";

const getCurrentPosition = (getWeather, denied) => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getWeather, denied);
    }
};

const getWeather = (success) => {
    const {latitude, longitude} = success.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)

    .then((response) => response.json())

    .then((data) => {
        console.log(data)
        showWeather(data);
    })
    .catch((error) => {
        console.log(error);
    });
};

const denied = (denied) => {
    console.log(denied.message);
};

getCurrentPosition(getWeather, denied);

function showWeather(data){
  const {humidity} = data.main;
  const {name} = data;
  const {temp} = data.main;
  const {description} = data.weather[0];
  const {speed} = data.wind;
  
 document.querySelector(".city").innerText = "Weather in" + " " + name;
 document.querySelector(".temp").innerText = temp + "°C";
 document.querySelector(".description").innerText = description;
 document.querySelector(".humidity").innerText =  "Humidity:" + " " + humidity + "%";
 document.querySelector(".wind").innerText = "Wind speed:" + " " + speed + "km/hr"

}
