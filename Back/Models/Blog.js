const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
    campo: {
        type: String,
        required: true
    },
    dato: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Blog', InputSchema); 