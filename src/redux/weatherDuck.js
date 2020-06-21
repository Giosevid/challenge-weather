import { getWeatherByCityName } from "../services/weatherServices";

// constanst

const GET_WEATHER = "GET_WEATHER";
const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";
const CLEAN_WEATHER = "CLEAN_WEATHER";

const initialData = {
  fetching: false,
  currentWeather: {},
  otherDays: [],
};

// reducer
export default function reducer(state = initialData, action) {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, fetching: true };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: action.payload.city,
        otherDays: action.payload.list,
        fetching: false,
        error: "",
      };
    case GET_WEATHER_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case CLEAN_WEATHER:
      return { ...state, currentWeather: {}, otherDays: [], error: "" };
    default:
      return state;
  }
}

//action (action creator)

export const getWeatherActions = (cityName) => (dispatch, getState) => {
  dispatch({
    type: GET_WEATHER,
  });
  return getWeatherByCityName(cityName)
    .then((res) => {
      localStorage.setItem("state", JSON.stringify(res.data));
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      let errorMessage;
      if (error.response.status === 400) {
        errorMessage = "Error al comunicarse con el servidor";
      } else if (error.response.status === 404) {
        errorMessage = "Ciudad no encontrada";
      } else {
        errorMessage = "Ocurrio un error inesperado";
      }
      dispatch({
        type: GET_WEATHER_ERROR,
        payload: errorMessage,
      });
    });
};

export const cleanWeather = () => (dispatch, getState) => {
  localStorage.removeItem("state");
  dispatch({
    type: CLEAN_WEATHER,
  });
};
