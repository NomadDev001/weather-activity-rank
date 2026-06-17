export async function getCoordinates(city: string) {
    const url =
        `https://geocoding-api.open-meteo.com/v1/search` +
        `?name=${encodeURIComponent(city)}` +
        `&count=1`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }

    const result = data.results[0];

    return {
        name: result.name,
        country: result.country,
        latitude: result.latitude,
        longitude: result.longitude,
        cacheKey: `${result.name}-${result.country}`
            .toLowerCase()
            .replace(/\s+/g, "-")
    };
}

export async function getForecast(lat: number, lon: number) {
    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${lat}` +
        `&longitude=${lon}` +
        `&daily=temperature_2m_max,precipitation_sum,snowfall_sum,windspeed_10m_max` +
        `&forecast_days=7` +
        `&timezone=auto`;

    const response = await fetch(url);
    const data = await response.json();

    return data.daily;
}