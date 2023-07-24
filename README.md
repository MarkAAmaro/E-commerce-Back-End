# E-commerce Back End

## Description

This application is to provide a back end using Node.js, Express.js, MySQL, Sequelize, and Dotenv. This back end application helps manage effective ways to set data using modern technologies.

## Features
- Sequelize and MySQL for database management
- CRUD operations on each entity (Categories, Products, Tags)
- APIs for categories, products, and tags

## Getting Started
- Pre-requisites
- Node.js
- MySQL
- Insomnia Core or any other API testing tool

## Installation
1. Clone this repository to your local machine
2. Navigate to the project directory
3. Install the required npm packages
4. Setup your MySQL user, password and database details in a .env file
5. Run the schema and seeds commands to create database

## Usage

1. Start the server and sync the Sequelize models to the MySQL database
2. Open your API testing tool in this case Insomia and setup the GET routes for categories, products, and tags
3. For POST, PUT, and DELETE requests, make sure to adjust the request type in Insomia and use the appropriate endpoints

## Testing

To validate the functionality of the application, you can use Insomnia or any other API testing tool to test the API POST, PUT, and DELETE routes. You should be able to successfully create, update, and delete data in your database
