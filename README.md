# AITU Backend Project

This project is a Node.js backend application that uses Express.js to provide a simple API for searching artists and tracks using Spotify's Web API. The application also serves static files and includes error handling for a smooth user experience.

## Stack
- **Node.js**
- **HTML**
- **CSS**
- **JavaScript**
- **ExpressJS**
- **SCSS**
- **Bootstrap 5.3**

## Features

- **Search API:** Endpoints for searching artists and tracks via Spotify Web API.
- **Static File Serving:** Serves CSS, JavaScript, and HTML files for a basic frontend.
- **Middleware:** Includes logging and error handling middleware.
- **Environment Configuration:** Uses environment variables to store sensitive information.

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14.x or higher)
- **npm** (comes with Node.js)
- **Spotify Developer Account**: Obtain your `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sherinur/aitu-backend.git
   cd aitu-backend
   git switch spotify-finder
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Spotify credentials:

   ```plaintext
   SPOTIFY_CLIENT_ID=your-client-id
   SPOTIFY_CLIENT_SECRET=your-client-secret
   PORT=4200 # Optional, defaults to 4200
   ```

## Running the Application

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running on `http://localhost:4200` by default.

## Project Structure

```plaintext
aitu-backend/
├── public/                # Static files (CSS, JS, SCSS)
│   ├── script.js
│   ├── styles.css
│   ├── styles.css.map
│   └── styles.scss
├── src/                   # Backend source code
│   └── search/            # Search API
│       ├── error-handler.js
│       ├── search.controller.js
│       └── search.service.js
├── views/                 # HTML files
│   └── index.html
├── node_modules/          # Installed dependencies
├── package.json           # Project metadata
├── package-lock.json      # Dependency lock file
├── server.js              # Main server file
└── .env                   # Environment variables (not included in the repository)
```

## API Endpoints

### Search Artists

**GET** `/search/artists?query=<artist-name>`

- **Parameters**: 
  - `query`: The name of the artist to search for.
- **Response**:
  - `200 OK`: Returns an array of artists.
  - `400 Bad Request`: If the `query` parameter is missing.

### Search Tracks

**GET** `/search/tracks?query=<track-name>`

- **Parameters**: 
  - `query`: The name of the track to search for.
- **Response**:
  - `200 OK`: Returns an array of tracks.
  - `400 Bad Request`: If the `query` parameter is missing.
