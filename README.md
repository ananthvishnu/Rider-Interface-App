# MERN Rider-Interface-App

This is a simple MERN (MongoDB, Express.js, React.js, Node.js) Rider-Interface-App developed for the Mood For Code Software Engineer Internship.

## Description

The MERN Rider-Interface-App is a web application that allows users to manage rider details. It provides features for viewing, adding, editing, and deleting rider information. The application uses the MERN stack for the backend and frontend development.

## Backend dependencies

## cors
The cors module is used to enable Cross-Origin Resource Sharing (CORS) in the application. It allows the backend server to handle requests from different origins, which is useful when integrating with frontend applications running on different domains.

## dotenv
The dotenv module is used for managing environment variables in the application. It loads environment variables from a .env file into the Node.js process.env object. This makes it convenient to configure the application's behavior based on different environments, such as development, production, or testing.

## express
The express module is a web application framework for Node.js. It provides a set of features and utilities for building web applications and APIs. Express simplifies the process of handling HTTP requests, routing, middleware, and more. It's a popular choice for building backend applications due to its simplicity and flexibility.


## moment
The moment module is a date and time manipulation library for JavaScript. It provides an easy-to-use API for parsing, formatting, and manipulating dates and times. In the MERN Rider-Interface-App, moment may be used for handling and formatting timestamps related to rider data. It simplifies common tasks involving dates and times.

## mongoose
The mongoose module is an Object Data Modeling (ODM) library for MongoDB. It provides a higher-level abstraction for interacting with MongoDB databases. With mongoose, you can define schemas and models for your data, perform database operations using JavaScript objects, and leverage powerful querying and validation capabilities. It simplifies working with MongoDB in a Node.js application.

## multer
The multer module is a middleware for handling multipart/form-data, primarily used for file uploads. In the MERN Rider-Interface-App, multer may be used for handling profile picture uploads for riders. It simplifies the process of handling file uploads by automatically managing the storage and retrieval of uploaded files.

## nodemon
The nodemon module is a development utility that monitors file changes and automatically restarts the server. It is particularly useful during development, as it saves time by automatically refreshing the server whenever you make changes to the code. This eliminates the need for manual server restarts and provides a more efficient development workflow.

## validator
The validator module is a library for data validation and sanitization. It provides functions for validating and sanitizing different types of data, such as strings, numbers, and email addresses. In the MERN Rider-Interface-App, validator may be used for input validation and data sanitization, such as validating email addresses or checking for required fields. It helps ensure the integrity and validity of user input and data.

# Frontend dependencies

axios
bootstrap
moment
react-bootstrap
react-router-dom
react-select
react-toastify

# Installation & Run the App

## Clone the Repository
git clone https://github.com/your-username/your-repo.git

## Change to the Project Directory
cd your-repo

## Install Dependencies client & server 
npm install

## Set Up Environment Variables
Create a .env file in the root directory of the project. Inside the .env file, provide the required environment variables. You can refer to the .env.example file for the necessary variables.

## Start the Application
npm start








