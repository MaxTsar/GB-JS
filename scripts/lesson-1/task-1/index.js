const getFahrenheitTemperature = (celsius) => {
  return (9 / 5) * celsius + 32;
};

const inputCelsius = Number(prompt('Введите температуру в цельсиях'));

const fahrenheit = getFahrenheitTemperature(inputCelsius);

const temperatureResult = `${inputCelsius} градусов по цельсию = ${fahrenheit} градусов по фарингейту`;

alert(temperatureResult);