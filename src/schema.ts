export const typeDefs = `#graphql
  type Query {
    rankActivities(city: String!): WeatherResult!
  }

  type WeatherResult {
    city: String!
    forecast: Forecast!
  }

  type Forecast {
    temperature_2m_max: [Float!]!
    precipitation_sum: [Float!]!
    snowfall_sum: [Float!]!
    windspeed_10m_max: [Float!]!
  }
`;