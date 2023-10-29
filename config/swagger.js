const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Bookstore API',
        version: '1.0.0',
        description: 'API for managing books in a bookstore',
    },
    servers: [
        {
            url: 'https://4ue4plftuf.execute-api.us-east-1.amazonaws.com/prod',
            description: 'AWS server',
        },
        {
            url: 'http://localhost:8000',
            description: 'Local server',
        },
    ],
};

exports.swaggerOptions = {
    swaggerDefinition,
    apis: ['documentation/*'], // Modify this to match the path to your route files
};

