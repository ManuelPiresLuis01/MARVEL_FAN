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
        return rows[0]; 
      },
      async findById(id) {
        const sql = "SELECT * FROM users WHERE id = ?";
        const [rows] = await db.execute(sql, [id]);
        return rows[0]; 
      },
      async activateAccount(email){
        const sql = "UPDATE users SET status = 'active' WHERE email = ?;"
        await db.execute(sql, [email]);
      },
      async deleteCode(email) {
        const sql = "UPDATE users SET code = '' WHERE email = ?;"
        await db.execute(sql, [email]);
      },
      async newCode(code,email) {
        const sql = "UPDATE users SET code = ? WHERE email = ?;"
        await db.execute(sql, [code,email]);
      },
      async updatePassword(email, passwordHash) {
        const sql = "UPDATE users SET password = ? WHERE email = ?;"
        await db.execute(sql, [passwordHash, email]);
      },
      async status(email) {
        const sql = "SELECT status FROM users WHERE email = ?;"
        const [rows] = await db.execute(sql, [email]);
        return rows[0].status; 
      }
};

export default userModel;
