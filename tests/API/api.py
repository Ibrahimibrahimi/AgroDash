from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/weather')
def get_weather():
    # Example coordinates (Berlin)
    latitude = 52.52
    longitude = 13.41
    url = (
        "https://api.open-meteo.com/v1/forecast"
        f"?latitude={latitude}&longitude={longitude}"
        "&hourly=temperature_2m,precipitation,wind_speed_10m"
        "&timezone=GMT"
    )
    response = requests.get(url)
    data = response.json()

    # Extract relevant data
    times = data['hourly']['time']
    temperature = data['hourly']['temperature_2m']
    precipitation = data['hourly']['precipitation']
    wind_speed = data['hourly']['wind_speed_10m']

    # Send simplified data for visualization
    return jsonify({
        'times': times,
        'temperature': temperature,
        'precipitation': precipitation,
        'wind_speed': wind_speed
    })


if __name__ == '__main__':
    app.run(debug=True)
