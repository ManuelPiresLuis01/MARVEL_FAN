import db from "../config/db.js";

const userModel = {
    async createAccount(name, email, passwordHash, code, profile_picture_url, gender, country, city, birth_date, phone_number) {
        const sql = "INSERT INTO users (name, email, password, code, profile_picture_url, gender, country, city, birth_date, phone_number) VALUES (?,?,?,?,?,?,?,?,?,?)";
        const [result] = await db.execute(sql, [name, email, passwordHash, code, profile_picture_url, gender, country, city, birth_date, phone_number]);
        return result;
      },

      async findByEmail(email) {
        const sql = "SELECT * FROM users WHERE email = ?";
        const [rows] = await db.execute(sql, [email]);
        return rows[0]; // retorna o usuário ou undefined
      }
      
};

export default userModel;
