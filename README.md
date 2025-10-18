🌐 MERN API Server

This is the backend API server for a MERN stack application, built with Node.js, Express, and Mongoose (MongoDB). It provides a RESTful interface for managing product resources.


🚀 Project Setup

Follow these steps to get your server running locally.

Prerequisites
You need the following installed on your system:
Node.js (LTS version recommended)

npm (Node Package Manager, installed with Node.js)

MongoDB Instance (Local, Docker, or Cloud service like MongoDB Atlas)

1. Clone and Install Dependencies

Clone the repository
git clone https://github.com/Daniel-Dadzie/MERN-Stack-Projects


# Navigate into the project directory
cd project2 

# Install required packages (express, mongoose, dotenv, etc.)
npm install

2. Configure Environment VariablesThis project uses the dotenv package to manage sensitive configurations, particularly the MongoDB Connection URI.

1.Create a file named .env in the root directory.Add your MongoDB connection string to the file:# .env file
MONGO_URI="mongodb://******:******@172.23.0.1:27017/mern-september?authSource=admin"
(Note: Replace the local Docker IP and credentials with your actual MongoDB details.)

3. Start the Server

Start the application using Node's runtime environment (or nodemon if you have it installed for automatic restarts):

# Using node (standard run)
node index.js

# Using nodemon (recommended for development)
npm install -g nodemon # if you don't have it
nodemon index.js

The server will start on port 3000. You should see a confirmation message in your console:

✅ Connected to the database successfully
Server is running on port 3000



📁 Project Structure

This project follows a standard Express API structure:

project-root/
├── node_modules/       # Node packages (ignored by Git)
├── models/             # Mongoose schemas (e.g., productModels.js)
├── routes/             # Express routers (e.g., productRoute.js)
├── .env                # Environment variables (ignored by Git)
├── .gitignore          # Files/folders to ignore
├── index.js            # Main application entry point
├── package.json        # Project manifest
└── README.md           # This file


⚙️ API Endpoints

The API base URL is http://localhost:3000/api/products. 
All endpoints expect a JSON body for POST and PUT requests, with the Content-Type: application/json header.

Method
Endpoint
Description
Expected Body
Success Status

GET/api/products
Retrieve all products.
None200 OK

GET/api/products/:idRetrieve a single product by ID.None200 OK

POST/api/productsCreate a new product.{ "name": "...", "quantity": ..., "price": ... }201 Created

PUT/api/products/:idUpdate an existing product by ID.{ "price": 40 } (Fields to update)200 OK

DELETE/api/products/:idDelete a product by ID.None200 OK

Example Request (POST)

To create a new product, use a tool like Rest Client or Postman:

POST http://localhost:3000/api/products
Content-Type: application/json

{
    "name": "Mackerel",
    "quantity": 100,
    "price": 35
}
📚 Technologies Used

Node.js: JavaScript runtime environment.

Express: Minimalist web framework for Node.js.

Mongoose: MongoDB object modeling tool for Node.js.

MongoDB: NoSQL database for data storage.

dotenv: Module to load environment variables from a .env file.
