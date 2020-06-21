import axios from "axios";
const appId = "b5e73dff156f87af3f20ba84c86704d0";

const getWeatherByCityName = (cityName) => {
  const ep = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${appId}`;
  return axios.get(ep);
};

export { getWeatherByCityName };
