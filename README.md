# React + Vite

# Search Component

This is a React component that provides a real-time search experience, utilizing Material-UI components like `TextField` and `CircularProgress`.

## Features

- **Real-Time Search**: Updates search results as you type.
- **Loading Indicator**: Shows a spinner while fetching data.
- **Error Handling**: Logs errors and provides a fallback for failed API requests.
- **No Results Handling**: Displays a message if no results are found.

## Code Overview

- **State Variables**:
  - `searchValue`: Stores the user’s input.
  - `results`: Stores search results from the API.
  - `isLoading`: Manages the loading spinner state.
- **API Fetching**: Uses `fetch` to call the API with the query, updating `results` on success or clearing it on an empty query.
- **UI Elements**: Includes a search `TextField`, loading spinner, and result display.

## Usage

1. **Install Dependencies**:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
