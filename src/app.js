import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();

app.use(cors()); 
app.use(express.json());
app.use("/v1/api",routes)


export default app;