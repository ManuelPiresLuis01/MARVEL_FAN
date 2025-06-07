import numberGenerator from "../utils/numbergenerator.js";
import userModel from "../models/userModel.js";
import sendEmail from "../services/sendEmailService.js";
import { hashPassword } from "../services/hashService.js";

const userController = {

  async signUp(req, res) {
    const {
      name,
      email,
      password,
      gender,
      country,
      city,
      birth_date,
      phone_number
    } = req.body;
    const existingUser = await userModel.findByEmail(email);

    if (
        !name ||
        !email ||
        !password ||
        !gender ||
        !country ||
        !city ||
        !birth_date ||
        !phone_number
      ) 
        return res.status(400).json({ response: "Please fill in all required fields." });
      
      
    if (existingUser) 
      return res.status(400).json({ response: "this email already exist" });
    
    const code = numberGenerator();
    const passwordHash = await hashPassword(password); 
    const avatarName = `${name.charAt(0)}${name.charAt(1)}`;

    try {
      const newUser = await userModel.createAccount(
        name,
        email,
        passwordHash,
        code,
        avatarName,
        gender,
        country,
        city,
        birth_date,
        phone_number
      );

      try {
        await sendEmail(email,name,code);
      } catch (emailError) {
        return res.status(500).json({ response: "User created but error sending email" });
      }
      
      res.json({ response: "User created and the activation code was sent!" });
      
    } catch (error) {
      res.status(500).json({ error: "error in the server", response:"User wasn't created"});
    }
  }

};

export default userController;
