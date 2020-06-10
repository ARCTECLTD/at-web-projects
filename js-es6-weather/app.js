import * as ELEMENTS from "elements.js";
import { Http } from "http.js";
import { WeatherData, WEATHER_PROXY_HANDLER } from "weather-data.js";

const APP_ID = "6d8d9a7a56a7a1c3ee6f05839e17c442";

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener("click", searchWeather);

function searchWeather() {
  const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
  if (CITY_NAME.length == 0) {
    return alert("Please enter a city name");
  }
  const URL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    CITY_NAME +
    "&units=metric&appid=" +
    APP_ID;

  Http.fetchData(URL)
    .then((responseData) => {
      const WEATHER_DATA = new WeatherData(
        CITY_NAME,
        responseData.weather[0].description.toUpperCase()
      );
      const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
      WEATHER_PROXY.temperature = responseData.main.temp;
    })
    .catch((error) => alert(error));
}
