# Bookstore API

Welcome to the Bookstore API! This API allows you to manage a collection of books. You can add, update, delete, and view books using the provided endpoints. This README provides instructions on how to run the server locally, deploy the API documentation, and offers insights into the tech stack and API endpoints.

## Decisions and Assumptions

1. **Decoupled Architecture**: A central consideration throughout development was to create a decoupled architecture. This design approach ensures that the application is flexible and extensible, allowing for the easy addition of new features in the future.

2. **Terraform for Infrastructure**: To manage infrastructure as code, Terraform was chosen. This decision simplifies the process of provisioning and managing resources on AWS, making the application infrastructure more scalable and maintainable.

3. **API Documentation with Swagger**: Swagger was integrated into the project to provide comprehensive and interactive API documentation. This enhances the user experience and simplifies interaction with the API.

4. **Scalability**: The project was architected with scalability in mind, ensuring that it can handle growth and increased usage effectively.

## API Documentation

Explore the API documentation to understand available endpoints, request/response formats, and how to interact with the API. The documentation is available [https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod/api/docs/](https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod/api/docs).

## Local Setup

Follow these steps to run the server locally:

1. **Clone the Repository**: 
```
git clone https://github.com/KunalAnkur/bookstore.git
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

## Screenshot
<img width="1513" alt="Screenshot 2023-10-30 at 2 43 35 AM" src="https://github.com/KunalAnkur/bookstore/assets/57923976/53cb4fe4-1f5b-4fd0-9e34-51e0c2bfb029">

<img width="1408" alt="Screenshot 2023-10-30 at 2 43 56 AM" src="https://github.com/KunalAnkur/bookstore/assets/57923976/63f10fe9-2723-4f6a-9829-6264a6a516e7">

<img width="1410" alt="Screenshot 2023-10-30 at 2 44 38 AM" src="https://github.com/KunalAnkur/bookstore/assets/57923976/d9210a97-b064-4c48-8019-9cfbf3276bea">

<img width="1412" alt="Screenshot 2023-10-30 at 2 45 10 AM" src="https://github.com/KunalAnkur/bookstore/assets/57923976/a722fe9a-f37c-49ba-a7fc-54191c939980">
<img width="1400" alt="Screenshot 2023-10-30 at 2 45 43 AM" src="https://github.com/KunalAnkur/bookstore/assets/57923976/64449e8d-b0a0-4b2b-b59b-29de95ef4300">

<img width="1401" alt="Screenshot 2023-10-30 at 2 46 02 AM" src="https://github.com/KunalAnkur/bookstore/assets/57923976/4e5ba912-00fd-4bc3-8283-80fc7e67467e">





