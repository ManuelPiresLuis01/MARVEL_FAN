import express from 'express';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';
import upload from '../middlewares/upload.js';
import { uploadImage } from '../controllers/uploadImageController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
const routes = express.Router();

routes.post("/auth/registration",userController.signUp);
routes.put("/auth/activateAccount",userController.activationAccount);
routes.put("/auth/resendCode",userController.resendCode);
routes.put("/auth/recoveryAccount",userController.sendRecoveryCode);
routes.put("/auth/resetPassword",userController.recoveryAccount);

routes.post("/auth/login", authController.login);

routes.put('/upload/profile-picture', verifyToken, upload.single('image'), uploadImage);

export default routes;
