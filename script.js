document.getElementById('convert').addEventListener('click', function() {
    const tempInput = document.getElementById('temperature').value;
    const selectedUnit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
  
    // Validate input
    if (isNaN(tempInput) || tempInput === '') {
      resultElement.textContent = 'Please enter a valid number';
      return;
    }
  
    const temperature = parseFloat(tempInput);
    let convertedTemp = '';
    
    // Convert based on the selected unit
    switch (selectedUnit) {
      case 'celsius':
        convertedTemp = `Fahrenheit: ${convertCelsiusToFahrenheit(temperature)} °F | Kelvin: ${convertCelsiusToKelvin(temperature)} K`;
        break;
      case 'fahrenheit':
        convertedTemp = `Celsius: ${convertFahrenheitToCelsius(temperature)} °C | Kelvin: ${convertFahrenheitToKelvin(temperature)} K`;
        break;
      case 'kelvin':
        convertedTemp = `Celsius: ${convertKelvinToCelsius(temperature)} °C | Fahrenheit: ${convertKelvinToFahrenheit(temperature)} °F`;
        break;
    }
  
    // Display result
    resultElement.textContent = convertedTemp;
  });
  
  // Conversion Functions
  function convertCelsiusToFahrenheit(celsius) {
    return ((celsius * 9/5) + 32).toFixed(2);
  }
  
  function convertCelsiusToKelvin(celsius) {
    return (celsius + 273.15).toFixed(2);
  }
  
  function convertFahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(2);
  }
  
  function convertFahrenheitToKelvin(fahrenheit) {
    return (((fahrenheit - 32) * 5/9) + 273.15).toFixed(2);
  }
  
  function convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }
  
  function convertKelvinToFahrenheit(kelvin) {
    return (((kelvin - 273.15) * 9/5) + 32).toFixed(2);
  }
  