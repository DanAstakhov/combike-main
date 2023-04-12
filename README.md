# Combike Backend<br/>
The Combike project is a bicycle loan system for the city of Montreal. The backend is responsible for handling all the data, processing requests from the frontend, and communicating with the database.<br/>

## Technologies Used<br/>
NodeJS<br/>
Express<br/>
MongoDB - database<br/>
JSON Web Token - secure admin and user authentication/authorization<br/>
BCrypt - encrypting passwords<br/>

## File Structure<br/>

#### combike
|-- controllers<br/>
| |-- bikesController.js<br/>
| |-- locationsController.js<br/>
| |-- reservationsController.js<br/>
|-- middlewares<br/>
| |-- authentication.js<br/>
| |-- authorization.js<br/>
| |-- validate.js<br/>
|-- models<br/>
| |-- bike.js<br/>
| |-- location.js<br/>
| |-- reservation.js<br/>
| |-- user.js<br/>
|-- routes<br/>
| |-- bikes.js<br/>
| |-- locations.js<br/>
| |-- reservations.js<br/>
| |-- users.js<br/>
|-- utils<br/>
| |-- errorHandler.js<br/>
| |-- jwt.js<br/>
|-- .env<br/>
|-- .gitignore<br/>
|-- package.json<br/>
|-- package-lock.json<br/>
|-- server.js<br/>
<br/>
* controllers folder contains the files that handle the requests and the response.
* middlewares folder contains the files responsible for authentication, authorization, and request validation.
* models folder contains the schema for the different collections in the database.
* routes folder contains the routing for different endpoints.
* utils folder contains the utility functions.
* .env file contains the environment variables.
* .gitignore file specifies the files that should not be tracked by Git.
* package.json and package-lock.json contain the dependencies and dev-dependencies of the project.
* server.js is the main file that starts the server and connects to the database.
<br/>

## Starting the Server
#### To start the server, run the following command in the terminal:

> npm start

The server will start on port 5000. You can change the port number by setting the PORT environment variable.

## Connecting to the Database
The database connection string is stored in the MONGODB_URI environment variable in the .env file. The backend uses Mongoose to connect to the database and perform database operations.
