function convertTemperature() {
    const temp = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(temp)) {
        resultDiv.innerHTML = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(temp);
    let result = '';

    switch (unit) {
        case 'celsius':
            result = `${temperature}°C is ${(temperature * 9/5) + 32}°F and ${temperature + 273.15}K`;
            break;
        case 'fahrenheit':
            result = `${temperature}°F is ${(temperature - 32) * 5/9}°C and ${((temperature - 32) * 5/9) + 273.15}K`;
            break;
        case 'kelvin':
            result = `${temperature}K is ${temperature - 273.15}°C and ${(temperature - 273.15) * 9/5 + 32}°F`;
            break;
    }

    resultDiv.innerHTML = result;
}
