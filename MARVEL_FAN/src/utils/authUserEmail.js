// This file contains utility functions for validating and processing user email addresses.

const validator = require('validator');

const isValidEmail = (email) => {
    return validator.isEmail(email);
};

const sanitizeEmail = (email) => {
    return validator.normalizeEmail(email);
};

module.exports = {
    isValidEmail,
    sanitizeEmail
};