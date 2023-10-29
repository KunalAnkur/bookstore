const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Bookstore API',
        version: '1.0.0',
        description: 'API for managing books in a bookstore',
    },
};

exports.swaggerOptions = {
    swaggerDefinition,
    apis: ['documentation/*'], // Modify this to match the path to your route files
};

