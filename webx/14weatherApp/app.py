import requests
import string
from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)


def get_weather_data(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=b21a2633ddaac750a77524f91fe104e7"
    r = requests.get(url).json()
    return r

@app.route('/')
def index_get():
    r = get_weather_data("london")
    weather = {
        'city' : "london",
        'temperature' : r['main']['temp'],
        'description' : r['weather'][0]['description'],
        'icon' : r['weather'][0]['icon'],
    }

    return render_template('index.html', weather=weather)

@app.route('/', methods=['POST'])
def index_post():
    new_city = request.form.get('city')
    new_city = new_city.lower()
    new_city = string.capwords(new_city)
    
    r = get_weather_data(new_city)
    weather = {
        'city' : new_city,
        'temperature' : r['main']['temp'],
        'description' : r['weather'][0]['description'],
        'icon' : r['weather'][0]['icon'],
    }

    return render_template('index.html', weather=weather)

app.run(debug=True)