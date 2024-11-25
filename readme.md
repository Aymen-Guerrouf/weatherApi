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
git clone https://github.com/yourusername/weather-api-project.git
cd weather-api-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the project root:

```plaintext
PORT=5000
NODE_ENV=development
REDIS_URI=redis://localhost:6379
WEATHER_API_KEY=your_visual_crossing_api_key
REDIS_CACHE_EXPIRY=3600
```

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

## Project Structure

```
weather-api/
│
├── config/
│   └── config.env
│
├── controllers/
│   └── weather.js
│
├── middleware/
│   ├── redis.js
│   └── errorHandler.js
│
├── routes/
│   └── weather.js
│
├── utils/
│   └── errorResponse.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
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

## Performance Optimization

- In-memory caching with Redis
- Efficient API request handling
- Minimal response latency

## Security Considerations

- Environment-based configuration
- Error masking
- Input parameter validation

## Logging

- Morgan middleware for request logging
- Console-based error logging
- Detailed error tracking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

- Ensure Redis is running before starting the server
- Check `.env` file for correct API keys and configurations
- Verify network connectivity to Visual Crossing API

## Future Enhancements

- Add more detailed weather insights
- Implement rate limiting
- Add authentication
- Support more location formats
- Enhance error handling

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/weather-api-project](https://github.com/yourusername/weather-api-project)
