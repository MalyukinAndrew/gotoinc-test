# Gotoinc test task

Made using React, React router, MUI, Redux Toolkit.

## Features

- Redux saves state to LocalStorage so it exists after page reload
- You can make order or delivery requests
- You can see all users requests
- You can sort requests by creation date or by dispatch date
- You can see exact user's requests
- When on the page with exact user's requests - you can edit, delete or see matching requests from other users (Matches are displayed according to the following principle: the same city from which the parcel is delivered, the same city where the parcel is delivered, and the delivery date of the delivery request no later than that stated in the order request)

## [Demo](https://master--gotoinc-test-task.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install all necessary libraries.

### `vite`

Runs the app in the development mode.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `vite build`

Builds the app for production.
