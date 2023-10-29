const express = require('express');
const router = express.Router();
const {addBook, deleteBook,getBook, listBooks,updateBook} = require('../controllers/books');
const { bodyCheck, paramsCheck } = require("../middlewares/validator")

// List all books
router.get('/', listBooks);

// Get a specific book by ID
router.get('/:id', getBook);

// Add a new book

router.post('/', bodyCheck, addBook);

// Update a book by ID
router.put('/:id', paramsCheck, updateBook);

// Delete a book by ID
router.delete('/:id', paramsCheck, deleteBook);

module.exports = router;
