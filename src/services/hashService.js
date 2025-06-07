import bcrypt from 'bcrypt';
import dotenv from "dotenv"

dotenv.config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUND);

export const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  return hash;
};


export const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash); 
};
