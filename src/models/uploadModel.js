import db from "../config/db.js";

const uploadImageUrl  ={
    async upload(imageUrl,id) {
        const sql = "UPDATE users SET profile_picture_url = ? WHERE id = ?";
        await db.execute(sql, [imageUrl, id]); 

    }
}


export default uploadImageUrl ;