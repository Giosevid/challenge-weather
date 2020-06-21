import moment from "moment";

const removeDuplicates = otherDays => [
  ...new Map(
    otherDays.map((weatherElement) => ({
      ...weatherElement,
      filterDate: moment(weatherElement.dt_txt, "YYYY-MM-DD").format("DD"),
    })).map(weatherElement => [weatherElement?.filterDate, weatherElement])
  ).values()
];

const convertKelvinToCelsius = kelvin => {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    return parseFloat(kelvin - 273.152).toFixed(2);
  }
};


export { removeDuplicates, convertKelvinToCelsius };
