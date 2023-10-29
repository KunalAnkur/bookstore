const Book = require('../models/Book');

// Get a list of all books
exports.listBooks = async (req, res) => {
    try {
        // Get the limit and offset from the query parameters, with default values
        const limit = parseInt(req.query.limit) || 10; // Default: 10 items per page
        const offset = parseInt(req.query.offset) || 0; // Default: start from the beginning

        // Fetch books from the database with pagination
        const books = await Book.find()
            .skip(offset)  // Skip the specified number of items
            .limit(limit); // Limit the result to the specified number of items

        // Count total number of books in the database
        const totalBooks = await Book.countDocuments();

        // Respond with a 200 OK status, the list of books, and pagination information
        return res.status(200).json({
            books,
            totalBooks,
            limit,
            offset
        });
    } catch (error) {
        // Handle any errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

// Get a specific book by ID
exports.getBook = async (req, res) => {
    try {
        // Extract the book ID from the URL parameters
        const id = req.params.id;

        // Find the book by its ID in the database
        const book = await Book.findById(id);

        // Check if the book exists
        if (!book) {
            // Respond with a 404 Not Found status if the book is not found
            return res.status(404).json({ error: 'Book not found' });
        }

        // Respond with a 200 OK status and the book details
        return res.status(200).json(book);
    } catch (error) {
        // Handle any errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

// Add a new book
exports.addBook = async (req, res) => {
    try {
        // Extract book details (title, author, summary) from the request body
        const { title, author, summary } = req.body;

        // Create a new Book instance
        const newBook = new Book({ title, author, summary });

        // Save the new book to the database
        const savedBook = await newBook.save();

        // Respond with a 201 Created status and the saved book
        return res.status(201).json(savedBook);
    } catch (error) {
        // Handle any errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
    try {
        // Extract book details (title, author, summary) and book ID from the request
        const id = req.params.id;
        const { title, author, summary } = req.body;

        // Update the book in the database by its ID
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, summary }, { new: true });

        // Check if the book was not found
        if (!updatedBook) {
            // Respond with a 404 Not Found status
            return res.status(404).json({ error: 'Book not found' });
        }

        // Respond with a 200 OK status and the updated book
        return res.status(200).json(updatedBook);
    } catch (error) {
        // Handle any errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
    try {
        // Extract the book ID from the URL parameters
        const id = req.params.id;

        // Delete the book from the database by its ID
        const deletedBook = await Book.findByIdAndDelete(id);

        // Check if the book was not found
        if (!deletedBook) {
            // Respond with a 404 Not Found status
            return res.status(404).json({ error: 'Book not found' });
        }

        // Respond with a 204 No Content status, indicating successful deletion
        return res.status(204).send();
    } catch (error) {
        // Handle any errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: 'Internal server error', error });
    }
};
