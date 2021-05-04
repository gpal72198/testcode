const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    bookTitle: {
        type: String
    },
    autherName: {
        type: String
    },
}); 

mongoose.model('books', bookSchema);