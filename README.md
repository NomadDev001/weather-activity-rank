# Weather Activity Ranking Service

## Overview

This service ranks activities for a city based on weather conditions over the next 7 days.

Activities:
- Skiing
- Surfing
- Outdoor sightseeing
- Indoor sightseeing

The system integrates with Open-Meteo and caches forecast results in SQLite.

---

## Tech Stack

- Node.js
- TypeScript
- Apollo GraphQL
- Prisma
- SQLite

---

## Architecture

GraphQL → Service Layer → Repository Layer → SQLite Cache → Open-Meteo API

---

## How it works

1. Resolve city coordinates via Open-Meteo geocoding API
2. Check local cache using deterministic city key
3. If cached → return stored forecast
4. If not cached → fetch weather API and persist
5. Aggregate 7-day forecast into activity scores
6. Return ranked activities

---

## Run locally

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```