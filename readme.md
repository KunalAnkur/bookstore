# Bookstore API

Welcome to the Bookstore API! This API allows you to manage a collection of books. You can add, update, delete, and view books using the provided endpoints. This README provides instructions on how to run the server locally, deploy the API documentation, and offers insights into the tech stack and API endpoints.

## Local Setup

Follow these steps to run the server locally:

1. **Clone the Repository**: 
```
git clone https://github.com/your-username/bookstore.git
```
```
cd bookstore
```

2. **Install Dependencies**: 

```
npm install
```


3. **Create Environment Variables**:
Create a `.env` file in the root directory and add the following variables:

```
DB_URI=<YOUR DATABASE URL>
PORT=8000
```


4. **Start the Server**:

```
npm start
```
The server will start locally on [http://localhost:8000](http://localhost:8000).

## API Documentation

Explore the API documentation to understand available endpoints, request/response formats, and how to interact with the API. The documentation is available [here](<https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod>).

## Tech Stack

- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing book data.
- **Mongoose**: An ODM for MongoDB.
- **AWS**: Amazon Web Services for infrastructure.
- **Terraform**: Infrastructure as Code tool for AWS.

## API Endpoints

### List of Books

- **Endpoint**: GET `https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod/api/v1/books`
- **Description**: Get a list of all books with optional pagination using `limit` and `offset` query parameters.

### Get a Book by ID

- **Endpoint**: GET `https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod/api/v1/books/:id`
- **Description**: Get details of a specific book by its unique ID.

### Add a New Book

- **Endpoint**: POST `https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod/api/v1/books`
- **Description**: Add a new book to the collection. Requires a JSON request body with `title`, `author`, and `summary` fields.

### Update a Book

- **Endpoint**: PUT `https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod/api/v1/books/:id`
- **Description**: Update details of a specific book by its unique ID. Requires a JSON request body with `title`, `author`, and `summary` fields.

### Delete a Book

- **Endpoint**: DELETE `https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod/api/v1/books/:id`
- **Description**: Delete a specific book by its unique ID.


