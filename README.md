# recipe-App

# Recipe Application Backend

The Recipe Application Backend is the server-side component of the Recipe Application. It handles user authentication and manages recipe data using a MongoDB database. This backend is designed to work in conjunction with the Recipe Application frontend, which provides a user-friendly interface for users to explore and interact with various recipes.

**Note: The frontend development for the Recipe Application is still in progress. The backend is fully functional, and once the frontend is completed, it will seamlessly integrate with the backend to offer a complete recipe exploration experience.**

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Database](#database)
- [Technologies Used](#technologies-used)

## Introduction

The Recipe Application Backend provides essential functionality to support user authentication and manage recipe data. It serves as the core engine behind the Recipe Application, ensuring that users can securely register, log in, and access a diverse range of recipes stored in the MongoDB database.

## Features

- **User Authentication:** Secure user registration and login functionality using JWT (JSON Web Tokens).
- **Recipe Management:** CRUD (Create, Read, Update, Delete) operations for recipes in the database. Users get to see all the recipes. However, they can only edit and delete the recipes that they have created.
- **API Security:** Implements security measures to prevent unauthorized access and data breaches.
- **User Profile:** Manage user-specific information.

## Database

The Recipe Application Backend uses MongoDB to store user and recipe data. Ensure you have a working MongoDB instance and configure the connection settings in the backend accordingly.

## Technologies Used

- **Node.js:** A JavaScript runtime for building server-side applications.
- **Express.js:** A web application framework for Node.js, used to build APIs.
- **MongoDB:** A NoSQL database for storing user and recipe data.
- **JSON Web Tokens (JWT):** For secure user authentication and authorization.