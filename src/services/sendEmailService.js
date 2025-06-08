import nodemailer from 'nodemailer';
import {authRecoveryEmail,authActivationEmail}from '../utils/authUserEmail.js';
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.APP_PASSWORD
  }
});

export const activationEmail = async (to, name, code) => {
  const mailOptions = {
    from: "MARVEL FAN :)",
    to,
    subject: 'Ative a sua conta no MARVEL FAN',
    html: authActivationEmail(name, code)
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info.response);
    return info;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const recoveryEmail = async (to, name, code) => {
  const mailOptions = {
    from: "MARVEL FAN :)",
    to,
    subject: 'Recupere a sua conta no MARVEL FAN',
    html: authRecoveryEmail(name, code)
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info.response);
    return info;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
