export const resolvers = {
  Query: {
    rankActivities: async (_: unknown, { city }: { city: string }) => {
      return {
        city,
        rankings: [
          {
            activity: "OUTDOOR_SIGHTSEEING",
            score: 82,
            reason: "Mocked good outdoor weather"
          },
          {
            activity: "INDOOR_SIGHTSEEING",
            score: 60,
            reason: "Mocked moderate indoor conditions"
          },
          {
            activity: "SURFING",
            score: 45,
            reason: "Mocked average wind conditions"
          },
          {
            activity: "SKIING",
            score: 10,
            reason: "Mocked no snow conditions"
          }
        ]
      };
    }
  }
};