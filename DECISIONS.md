# Decisions & Trade-offs

## Initial Plan

The goal was to build a backend service that ranks the next 7 days of weather for four activities:

* Skiing
* Surfing
* Outdoor sightseeing
* Indoor sightseeing

My first step was defining the GraphQL schema and separating the system into three parts:

1. Data ingestion (Open-Meteo API)
2. Persistence layer
3. Ranking engine

This separation keeps the system easier to extend and makes weather retrieval independent from ranking logic.

---

## Open Questions & Assumptions

Since the task was intentionally open-ended, I made these assumptions:

* City names are resolved through Open-Meteo geocoding.
* Weather data is refreshed every 6 hours.
* Ranking is based on weighted heuristics instead of strict yes/no rules.
* Scores are normalized between 0–100.
* The next 7 days are ranked individually rather than aggregated into one score.

---

## Storage Choice

I chose SQLite for persistence.

Why:

* Lightweight
* No setup required
* Fast enough for forecast caching
* Fits the scope of a take-home exercise

Trade-off:

* Not ideal for horizontal scaling or high concurrency
* PostgreSQL would be preferable in production

---

## API Design

I used GraphQL because the task explicitly required it.

Why:

* Flexible querying
* Easy to evolve schema
* Cleaner for nested ranking responses

Trade-off:

* Slightly more setup complexity than REST
* Better long-term extensibility

---

## Weather Persistence Strategy

Instead of calling Open-Meteo on every request:

Flow:

1. Check if weather data exists
2. Check freshness
3. Refresh only if stale

Why:

* Reduces API calls
* Improves performance
* Allows deterministic ranking on cached data

Trade-off:

* Slight risk of stale weather
* Chosen intentionally for performance simplicity

Alternative considered:

* Background cron refresh

Why rejected:

* Adds scheduling complexity for this scope

---

## Ranking Logic

I implemented a weighted heuristic model.

Examples:

Skiing:

* Low temperature
* Snowfall
* Snow depth

Surfing:

* Wind speed
* Wave proxy (wind + precipitation)
* Temperature

Outdoor sightseeing:

* Mild temperature
* Low rain
* Low wind

Indoor sightseeing:

* Bad outdoor weather increases score

Why:

This approach is transparent and easy to explain.

Trade-off:

* Less accurate than domain-specific models
* Much easier to maintain and adjust

---

## AI Usage

I used AI during development for:

* GraphQL schema brainstorming
* Ranking heuristic ideas
* Type safety improvements
* Refactoring suggestions
* Test case generation

All generated code was manually reviewed and adjusted.

---

## If I Had More Time

I would add:

* Scheduled refresh jobs
* Better geocoding fallback
* Historical weather analytics
* More realistic surf/ski scoring using specialized datasets
* Unit/integration tests for ranking weights
* Observability (logging + metrics)

---

## Priority Decisions

Given the 2–3 hour constraint, I prioritized:

1. Correct architecture
2. Persistent caching
3. Clear ranking logic
4. GraphQL usability

Over:

* Full production hardening
* Complex infra setup
* Advanced testing coverage
