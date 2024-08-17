# Food Connect

## Overview

Food Connect is a web platform designed to bridge the gap between restaurants with surplus food and NGOs that work to feed the underprivileged. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application enables restaurants to list excess food items, which can then be viewed and claimed by NGOs. The platform aims to reduce food waste while addressing hunger issues in the community.

## Features

- **Secure Authentication**: Separate login and registration pages for restaurants and NGOs, with secure session management.
- **Food Listing**: Restaurants can easily list surplus food items with details such as quantity, type of food, and expiry.
- **NGO Dashboard**: NGOs have access to a dedicated dashboard where they can view available food donations and claim them.
- **Responsive Design**: The platform is fully responsive, ensuring a seamless experience across devices.
- **Image Management**: Food item images are uploaded and stored securely using Cloudinary.

## Technologies Used

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Authentication**: JSON Web Tokens (JWT), Cookies


## Project Structure

- **client/**: Contains the React frontend.
  - **src/**: React components, styles, and assets.
- **server/**: Contains the Node.js backend.
  - **models/**: Mongoose models for MongoDB.
  - **routes/**: Express routes for handling API requests.
  - **controllers/**: Functions that handle the logic for each route.
  - **middlewares/**: Custom middleware for authentication, etc.
  - **config/**: Configuration files for database and other services.
