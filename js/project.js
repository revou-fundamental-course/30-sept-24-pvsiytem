const form = document.getElementById('tempForm');
const resultDiv = document.getElementById('result');
const explanationDiv = document.getElementById('explanation');

function convertTemperature(temp, scale) {
    let convertedTemp, explanation;

    if (scale === "Celsius") {
        convertedTemp = (temp * 9/5) + 32;
        explanation = `${temp}°C is equal to ${convertedTemp.toFixed(2)}°F.`;
    } else if (scale === "Fahrenheit") {
        convertedTemp = (temp - 32) * 5/9;
        explanation = `${temp}°F is equal to ${convertedTemp.toFixed(2)}°C.`;
    }
    return { convertedTemp, explanation };
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const temperature = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;

    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid temperature!';
        explanationDiv.textContent = '';
        return;
    }

    const { convertedTemp, explanation } = convertTemperature(temperature, scale);
    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}`;
    explanationDiv.textContent = explanation;
});
