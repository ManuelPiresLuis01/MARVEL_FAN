import express from 'express';
import userController from '../controllers/userController.js';

const routes = express.Router();

routes.post("/auth/registration",userController.signUp);
routes.put("/auth/activateAccount",userController.activationAccount);
routes.put("/auth/resendCode",userController.resendCode);
routes.put("/auth/recoveryAccount",userController.recoveryAccount);
export default routes;
