import express from 'express';
import userController from '../controllers/userController.js';

const routes = express.Router();

routes.post("/auth/registration",userController.signUp);



export default routes;
