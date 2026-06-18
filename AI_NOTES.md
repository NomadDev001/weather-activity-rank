# AI Session Notes

## Tools Used

Primary AI tools used during development:

* OpenAI ChatGPT
* Anthropic Claude
* Cursor AI assistant

---

## How AI Was Used

AI was used as an accelerator, not as an autopilot.

### 1. Architecture brainstorming

Prompt:
"How should I structure a Node.js GraphQL service with caching and weather ranking?"

Used for:

* Separating API, services, and storage layers

Decision:
Accepted with modifications.

---

### 2. GraphQL schema design

Prompt:
"Suggest a GraphQL schema for ranking activities based on 7-day weather forecasts."

Used for:

* Query shape
* Nested response structure

Decision:
Adjusted manually to fit project needs.

---

### 3. Ranking heuristics

Prompt:
"What weather conditions make skiing, surfing, outdoor sightseeing, and indoor sightseeing good?"

Used for:

* Initial scoring weights
* Suitability factors

Decision:
Refined manually to make scoring simpler and more explainable.

---

### 4. Persistence strategy

Prompt:
"What is a good cache invalidation strategy for weather forecasts?"

Used for:

* TTL-based refresh idea

Decision:
Implemented lazy refresh instead of background jobs.

---

### 5. Refactoring

Prompt:
"Refactor this resolver to reduce duplicated logic."

Used for:

* Cleaner service composition
* Improved readability

Decision:
Accepted partially.

---

## What AI Did Not Do

AI did not make final architecture decisions.

The following were decided manually:

* Storage choice
* Refresh strategy
* Ranking model
* GraphQL shape
* Data model

---

## Review Process

Every AI-generated suggestion was:

1. Reviewed manually
2. Tested locally
3. Adjusted where needed
4. Simplified for maintainability

I treated AI as a collaborator, not a source of truth.

---

## Key Trade-off

AI sped up:

* boilerplate generation
* brainstorming
* refactoring

But all domain decisions remained human-driven.
