import express from 'express';
import userController from '../controllers/userController.js';
import authController
 from '../controllers/authController.js';
const routes = express.Router();

routes.post("/auth/registration",userController.signUp);
routes.put("/auth/activateAccount",userController.activationAccount);
routes.put("/auth/resendCode",userController.resendCode);
routes.put("/auth/recoveryAccount",userController.sendRecoveryCode);
routes.put("/auth/resetPassword",userController.recoveryAccount);

routes.post("/auth/login", authController.login);


export default routes;
