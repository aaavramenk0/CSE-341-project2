const mongoose = require('mongoose');

const Schema = mongoose.Schema

module.exports = (mongoose) => {
    const userSchema = new Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    })
    return mongoose.model('users', userSchema);
}