import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

// app.get("/",(req, res) =>{
//     res.send("Server is ready")
// });
dotenv.config();
const PORT = process.env.PORT || 5000;
// console.log(process.env.MONGO_URI)

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
});