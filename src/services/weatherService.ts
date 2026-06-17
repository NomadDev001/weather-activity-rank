import { getCoordinates, getForecast } from "./openMeteoClient";
import { scoreActivities } from "./scoringService";
import { ForecastRepository } from "../repositories/forecastRepository";

const repo = new ForecastRepository();

export class WeatherService {
  async rank(city: string) {
    console.log(`[WeatherService] Request received: ${city}`);

    const location = await getCoordinates(city);
    console.log(`[WeatherService] Coordinates resolved:`, location);

    const existing = await repo.getLatestForecast(location.cacheKey);

    let forecast;

    if (existing) {
      console.log(`[WeatherService] Using cached forecast`);
      forecast = existing.data;
    } else {
      console.log(`[WeatherService] Fetching from Open-Meteo`);

      forecast = await getForecast(
        location.latitude,
        location.longitude
      );

      await repo.saveForecast(location.cacheKey, forecast);
    }

    console.log(`[WeatherService] Forecast ready`);

    const weather = {
      temperature:
        forecast.temperature_2m_max.reduce((a: number, b: number) => a + b, 0) /
        forecast.temperature_2m_max.length,

      precipitation:
        forecast.precipitation_sum.reduce((a: number, b: number) => a + b, 0),

      snowfall:
        forecast.snowfall_sum.reduce((a: number, b: number) => a + b, 0),

      wind:
        forecast.windspeed_10m_max.reduce((a: number, b: number) => a + b, 0) /
        forecast.windspeed_10m_max.length
    };

    console.log(`[WeatherService] Aggregated weather:`, weather);

    return {
      city: location.name,
      rankings: scoreActivities(weather)
    };
  }
}