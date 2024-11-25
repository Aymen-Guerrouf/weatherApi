        <h1>🌦️ Weather API Project</h1>

        <h2>Overview</h2>
        <p>A robust Express.js weather API that provides weather information using Visual Crossing Weather API with Redis caching for improved performance.</p>

        <h2>Features</h2>
        <ul>
            <li>Real-time weather data retrieval</li>
            <li>Redis caching mechanism</li>
            <li>Environment-specific configuration</li>
            <li>Error handling</li>
            <li>Flexible location and date range querying</li>
        </ul>

        <h2>Prerequisites</h2>
        <ul>
            <li>Node.js (v14+ recommended)</li>
            <li>Redis</li>
            <li>Visual Crossing Weather API Key</li>
        </ul>

        <h2>Installation</h2>
        <h3>1. Clone the Repository</h3>
        <pre><code>git clone https://github.com/Aymen-Guerrouf/weather-api.git

cd weather-api-project</code></pre>

        <h3>2. Install Dependencies</h3>
        <pre><code>npm install</code></pre>

        <h3>3. Environment Configuration</h3>
        <p>Create a <code>.env</code> file in the project root:</p>
        <pre><code>PORT=5000

NODE_ENV=development
REDIS_URI=redis://localhost:6379
WEATHER_API_KEY=your_visual_crossing_api_key</code></pre>

        <h3>4. Start the Server</h3>
        <pre><code># Development mode

npm run dev

# Production mode

npm start</code></pre>

</section>

        <h2>API Endpoints</h2>
        <h3>Get Weather Data</h3>
        <pre><code>GET /api/weather</code></pre>

        <h4>Query Parameters</h4>
        <ul>
            <li><code>location</code> (Required): City or location name</li>
            <li><code>startDate</code> (Optional): Start date for weather forecast</li>
            <li><code>endDate</code> (Optional): End date for weather forecast</li>
        </ul>

        <h4>Example Requests</h4>
        <pre><code>GET /api/weather?location=madrid

GET /api/weather?location=london&startDate=2024-01-01&endDate=2024-01-07</code></pre>

</section>

<br>

        <h2>Technologies Used</h2>
        <ul>
            <li>Express.js</li>
            <li>Redis</li>
            <li>Axios</li>
            <li>Dotenv</li>
            <li>Morgan (logging)</li>
            <li>Object-hash</li>
        </ul>
