# React + Vite

# FormComponent
This is a React component that manages a simple form with two text fields for entering a user's first and last name. The component uses useState for managing form values and useEffect to make an API request to a specified endpoint.

Features:
Two input fields for first name and last name.
Uses useState to handle form state.
Makes an API call to a backend endpoint (currently commented out).
This component demonstrates basic form handling, state management, and API fetching in React.

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
