# 🌦️ Weather API Project

## Overview

A robust Express.js weather API that provides weather information using Visual Crossing Weather API with Redis caching for improved performance.

## Features

- Real-time weather data retrieval
- Redis caching mechanism
- Environment-specific configuration
- Error handling
- Flexible location and date range querying

## Prerequisites

- Node.js (v14+ recommended)
- Redis
- Visual Crossing Weather API Key

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-api-project.git](https://github.com/Aymen-Guerrouf/weatherApi.git
cd weather-api-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration



### 4. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Get Weather Data

```
GET /api/weather
```

#### Query Parameters

- `location` (Required): City or location name
- `startDate` (Optional): Start date for weather forecast (YYYY-MM-DD)
- `endDate` (Optional): End date for weather forecast (YYYY-MM-DD)

#### Example Requests

```
GET /api/weather?location=madrid
GET /api/weather?location=london&startDate=2024-01-01&endDate=2024-01-07
```

#### Response Example

```json
{
  "success": true,
  "data": {
    "resolvedAddress": "London, UK",
    "days": [
      {
        "datetime": "2024-01-01",
        "tempmax": 10.5,
        "tempmin": 5.2,
        "temp": 7.8,
        "conditions": "Partly cloudy"
      }
    ]
  }
}
```



## Configuration

### Environment Variables

- `PORT`: Server port number
- `NODE_ENV`: Application environment (development/production)
- `REDIS_URI`: Redis connection string
- `WEATHER_API_KEY`: Visual Crossing Weather API key
- `REDIS_CACHE_EXPIRY`: Redis cache expiration time in seconds

## Technologies Used

- Express.js
- Redis
- Axios
- Dotenv
- Morgan (logging)
- Object-hash

## Caching Strategy

- Redis caching with configurable expiration
- Unique cache key generation based on request parameters
- Automatic cache invalidation

## Error Handling

- Custom `ErrorResponse` utility
- Comprehensive error logging
- Graceful error middleware
- Detailed error responses

