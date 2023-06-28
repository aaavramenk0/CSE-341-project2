const db = require('../models');
const User = db.user;

const jwt = require('jsonwebtoken')

// Create JSON web token function
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
    } catch {
        
    }
}