function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const cityName = cityInput.value.trim();

    if (!cityName) {
        alert("Please enter a city name");
        return;
    }
//I signed up and then it generated for me a apikey 
    const apiKey = "99eaf7d9794ff2e75c72f0f7d0a7e1b0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert("City not found. Please try again.");
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = "";

    const weatherInfo = document.createElement("div");
    weatherInfo.classList.add("weather-info");
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;

    weatherContainer.appendChild(weatherInfo);
}
