const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const forecastList = document.querySelector("#forecast");

const lat = 16.8322;
const lon = -11.5200;
const apiKey = "36329e3b703985bf100457d8b8b40d5c";


// CURRENT WEATHER
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=16.8322&lon=-11.5200&units=imperial&appid=36329e3b703985bf100457d8b8b40d5c
`;

// 5-DAY FORECAST
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=16.8322&lon=-11.5200&units=imperial&appid=36329e3b703985bf100457d8b8b40d5c
`;

async function getWeather() {
    try {
        // Current weather
        const response = await fetch(currentURL);
        const data = await response.json();

        // Current temp + description
        currentTemp.textContent = `${Math.round(data.main.temp)}°F`;
        weatherDesc.textContent = data.weather[0].description;

        // Weather icon
        const iconCode = data.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.querySelector("#weather-icon").setAttribute("src", iconURL);

        // High / Low
        document.querySelector("#temp-range").textContent =
            `High: ${Math.round(data.main.temp_max)}° | Low: ${Math.round(data.main.temp_min)}°`;

        // Humidity
        document.querySelector("#humidity").textContent = `Humidity: ${data.main.humidity}%`;

        // Sunrise / Sunset
        const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", {
            hour: "numeric", minute: "2-digit"
        });
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", {
            hour: "numeric", minute: "2-digit"
        });

        document.querySelector("#sunrise").textContent = `Sunrise: ${sunriseTime}`;
        document.querySelector("#sunset").textContent = `Sunset: ${sunsetTime}`;

        // Forecast
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        displayForecast(forecastData.list);

    } catch (error) {
        console.error("Weather error:", error);
    }
}


function displayForecast(list) {
    forecastList.innerHTML = "";

    const filtered = list.filter(item =>
        item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    filtered.forEach(day => {
        const li = document.createElement("li");
        const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long"
        });

        li.textContent = `${date}: ${Math.round(day.main.temp)}°F`;
        forecastList.appendChild(li);
    });
}

getWeather();
