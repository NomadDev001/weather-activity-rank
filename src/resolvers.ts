import { WeatherService } from "./services/weatherService";

const weatherService = new WeatherService();

export const resolvers = {
  Query: {
    rankActivities: async (_: unknown, { city }: { city: string }) => {
      return weatherService.rank(city);
    }
  }
};