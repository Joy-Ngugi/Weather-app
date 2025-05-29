<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/weather', function(Request $request) {
    $city = $request->query('city', 'Nairobi');
    $apiKey = env('OPENWEATHER_API_KEY');

    $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
        'q' => $city,
        'appid' => $apiKey,
        'units' => 'metric',
    ]);

    if ($response->successful()) {
        return response()->json($response->json());
    } else {
        return response()->json(['error' => 'Could not fetch weather data'], 500);
    }
});