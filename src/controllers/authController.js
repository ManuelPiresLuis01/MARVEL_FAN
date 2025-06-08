import userModel from "../models/userModel.js";
import { comparePassword } from "../services/hashService.js";
import { generateToken } from "../services/generateTokenService.js";

const authController = {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    try {
      const user = await userModel.findByEmail(email);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await comparePassword(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      const token = generateToken({ id: user.id, email: user.email });

      res.json({
        message: "Login successful",
        token: token,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
};

export default authController;
