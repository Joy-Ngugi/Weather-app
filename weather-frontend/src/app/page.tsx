'use client';
import { useState } from 'react';
import './globals.css';


export default function Home() {
  const [city, setCity] = useState('Nairobi');
  type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};

  const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    const res = await fetch(`http://127.0.0.1:8000/api/weather?city=${city}`);
    const data = await res.json();
    setWeather(data);
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="card p-6 shadow-xl w-full max-w-md bg-white rounded-xl space-y-4">
        <h1 className="text-5xl text-center text-red-500 font-bold">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city"
          className="input input-bordered w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather} className="btn btn-primary w-full">
          {loading ? 'Fetching...' : 'Get Weather'}
        </button>

        {weather && (
          <div className="mt-4 space-y-2 px-10">
            <p><strong>City:</strong> {weather.name}</p>
            <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
            <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </main>
  );
}

