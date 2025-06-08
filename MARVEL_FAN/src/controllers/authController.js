// src/controllers/authController.js

const User = require('../models/User'); // Assuming you have a User model
const sendEmailService = require('../services/sendEmailService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = process.env;

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUND));
        const newUser = await User.create({ name, email, password: hashedPassword });
        await sendEmailService.sendActivationEmail(newUser.email);
        res.status(201).json({ message: 'User registered successfully. Please check your email to activate your account.' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed. Please try again.' });
    }
};

// Login user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ error: 'Login failed. Please try again.' });
    }
};

// Activate user account
exports.activateAccount = async (req, res) => {
    const { email, code } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.activationCode !== code) {
            return res.status(400).json({ error: 'Invalid activation code.' });
        }
        user.isActive = true;
        await user.save();
        res.status(200).json({ message: 'Account activated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Activation failed. Please try again.' });
    }
};