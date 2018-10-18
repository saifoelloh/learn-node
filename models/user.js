const mongoose = require('mongoose');
const momentjs = require('moment');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    born: Date,
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    grade: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
