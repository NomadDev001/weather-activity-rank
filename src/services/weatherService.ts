import { getCoordinates, getForecast } from "./openMeteoClient";

export class WeatherService {
  async rank(city: string) {
    console.log(`[WeatherService] Request received: ${city}`);

    const location = await getCoordinates(city);

    console.log(`[WeatherService] Coordinates resolved:`, location);

    const forecast = await getForecast(
      location.latitude,
      location.longitude
    );

    console.log(`[WeatherService] Forecast received`);

    return {
      city: location.name,
      forecast
    };
  }
}