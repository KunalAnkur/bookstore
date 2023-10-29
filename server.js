const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require("./config/database");
const { swaggerOptions } = require('./config/swagger');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();

// Middlewares
app.use(bodyParser.json())

// Database connection
connectDatabase();
// Set up Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Load route
const booksRoute = require('./routes/books');

app.use('/api/v1/books', booksRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});