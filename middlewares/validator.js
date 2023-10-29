const { default: mongoose } = require("mongoose");

exports.bodyCheck = (req, res, next) => {
    const { title, author, summary } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is a required field.' });
    }
    if (!author) {
        return res.status(400).json({ error: 'Author is a required field.' });
    }
    if (!summary) {
        return res.status(400).json({ error: 'Summary is a required field.' });
    }

    next();
}

exports.paramsCheck = (req, res, next) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).json({error: 'Book ID is a required params'})
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: `${id} is invalid ObjectId` });
    }

    next();
}