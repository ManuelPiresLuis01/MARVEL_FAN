import app from "./app.js"
import db from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
      await db; 
      app.listen(PORT, () => {
        console.log(`🚀 server running in port: ${PORT}`);
      });
    } catch (error) {
      console.error("❌ Error running database ", error);
      process.exit(1); 
    }
  };
  
  startServer();
  