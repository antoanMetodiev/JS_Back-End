
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async function(userData) {
    if (userData.password !== userData['re-password']) {
        throw new Error('Re-Password is not equal on password!!!');
    }

    // Hashing:
    userData.password = 

    const isContains = UserModel.findOne({email: userData.password});

    

    await UserModel.create(userData);
};
