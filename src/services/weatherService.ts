import { getCoordinates, getForecast } from "./openMeteoClient";
import { scoreActivities } from "./scoringService";

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