const removeDuplicates = (originalArray, prop) => {
  const newArray = [];
  const lookupObject = {};
  let i;

  for (i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
};

const convertKelvinToCelsius = (kelvin) => {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    return parseFloat(kelvin - 273.152).toFixed(2);
  }
};

export { removeDuplicates, convertKelvinToCelsius };
