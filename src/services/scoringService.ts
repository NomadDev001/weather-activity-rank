type WeatherSummary = {
  temperature: number;
  precipitation: number;
  snowfall: number;
  wind: number;
};

export function scoreActivities(weather: WeatherSummary) {
  const rankings = [
    {
      activity: "SKIING",
      score:
        weather.snowfall > 20
          ? 90
          : weather.snowfall > 5
          ? 60
          : 10,
      reason:
        weather.snowfall > 5
          ? "Good snowfall expected"
          : "Not enough snow"
    },

    {
      activity: "SURFING",
      score:
        weather.wind > 20 && weather.precipitation < 10
          ? 85
          : weather.wind > 10
          ? 60
          : 30,
      reason:
        weather.wind > 10
          ? "Decent wind conditions"
          : "Low wind conditions"
    },

    {
      activity: "OUTDOOR_SIGHTSEEING",
      score:
        weather.temperature >= 15 &&
        weather.temperature <= 25 &&
        weather.precipitation < 5
          ? 90
          : 50,
      reason:
        weather.precipitation < 5
          ? "Comfortable weather"
          : "Weather may be unstable"
    },

    {
      activity: "INDOOR_SIGHTSEEING",
      score:
        weather.precipitation > 10 || weather.temperature < 10
          ? 85
          : 40,
      reason:
        weather.precipitation > 10
          ? "Better suited for indoor activities"
          : "Outdoor weather is preferable"
    }
  ];

  return rankings.sort((a, b) => b.score - a.score);
}