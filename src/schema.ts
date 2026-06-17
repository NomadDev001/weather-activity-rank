export const typeDefs = `#graphql
  type Query {
    rankActivities(city: String!): ActivityRankingResult!
  }

  type ActivityRankingResult {
    city: String!
    rankings: [ActivityRanking!]!
  }

  type ActivityRanking {
    activity: Activity!
    score: Float!
    reason: String!
  }

  enum Activity {
    SKIING
    SURFING
    OUTDOOR_SIGHTSEEING
    INDOOR_SIGHTSEEING
  }
`;