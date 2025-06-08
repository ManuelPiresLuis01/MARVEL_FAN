import numberGenerator from "../utils/numbergenerator.js";
import userModel from "../models/userModel.js";
import { activationEmail , recoveryEmail} from "../services/sendEmailService.js";
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
    const code = numberGenerator();
    const passwordHash = await hashPassword(password); 
    const avatarName = `${name.charAt(0)}${name.charAt(1)}`;

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
        await  activationEmail (email,name,code);
      } catch (emailError) {
        return res.status(500).json({ response: "User created but error sending email" });
      }
      
      res.json({ response: "User created and the activation code was sent!" });
      
    } catch (error) {
      res.status(500).json({ error: "error in the server", response:"User wasn't created"});
    }
  },

  async activationAccount(req,res){
    const {email,code} = req.body;

    if (!email ||!code ) 
        return res.status(400).json({ response: "Please fill in all required fields." });

    if (await userModel.status(email) == "active") 
        return res.status(400).json({ response: "Account already activated" });

    const user = await userModel.findByEmail(email);

    if(user){
        if (user.code === code) {
            res.json({message:"account activated"})
            await userModel.activateAccount(email);
            await userModel.deleteCode(email);
        }else{
            res.json({message:"code invalid or expired"})
        }
    }else{
        res.json({message:"email not found"})
    }
  },

  async resendCode(req, res) {
    const { email } = req.body;

    if (!email) 
      return res.status(400).json({ response: "Please fill in all required fields." });
        
    const user = await userModel.findByEmail(email);

    if (user) {
      const code = numberGenerator();
      try {
        await activationEmail (email, user.name, code);
        await userModel.newCode(code, email);
        res.json({ response: "New activation code sent!" });
      } catch (error) {
        res.status(500).json({ response: "Error sending email" });
      }
    } else {
      res.status(404).json({ response: "User not found" });
    }
  },

  async sendRecoveryCode(req, res) {
    const { email } = req.body;
    if (!email) 
      return res.status(400).json({ response: "Please fill in all required fields." });
    const user = await userModel.findByEmail(email);
    if (user) {
        const code = numberGenerator();
        try {
            await recoveryEmail(email, user.name, code);
            await userModel.newCode(code, email);
            res.json({ response: "Recovery code sent to your email!" });
        } catch (error) {
            res.status(500).json({ response: "Error sending recovery email" });
        }
        } else {
        res.status(404).json({ response: "User not found" });
        }
    },

    async recoveryAccount(req, res) {
      const { email, code, newPassword } = req.body;

      if (!email || !code || !newPassword) 
        return res.status(400).json({ response: "Please fill in all required fields." });
      
      const user = await userModel.findByEmail(email);
      if (user) {
        if (user.code === code) {
          const passwordHash = await hashPassword(newPassword);
          await userModel.updatePassword(email, passwordHash);
          await userModel.deleteCode(email);
          res.json({ response: "Password updated successfully!" });
        } else {
          res.status(400).json({ response: "Invalid or expired code" });
        }
      }
      else {
        res.status(404).json({ response: "User not found" });
      }
    }

};

export default userController;
